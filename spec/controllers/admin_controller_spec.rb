require 'rails_helper'

RSpec.describe AdminController, type: :controller do
  let(:guest_neither)  { Guest.create(attending: :neither, plus_ones: 0) }
  let(:guest_ss)       { Guest.create(attending: :saratoga_springs, plus_ones: 1) }
  let(:guest_thailand) { Guest.create(attending: :thailand, plus_ones: 2) }
  let(:guest_both)     { Guest.create(attending: :both, plus_ones: 3) }
  let(:all_guests)     { [guest_neither, guest_ss, guest_thailand, guest_both] }
  let(:locals) do
    {
      guests: all_guests,
      number_attending_saratoga_springs: 6,
      number_attending_thailand: 7
    }
  end

  describe '#index' do
    context 'when not logged in' do
      before { get :index }

      it 'redirects to login page' do
        response.should redirect_to(login_path)
      end
    end

    context 'when logged in 'do
      it 'renders successfully' do
        get :index, locals, { admin_id: 'admin_id' }
        response.should be_success
        response.should render_template('index')
      end
    end
  end

  describe '#verify_login' do
    before { post :verify_login }

    it 'sets admin id' do
      session[:admin_id].should == 'id'
    end

    it 'redirects to admin_path on success' do
      response.should redirect_to(admin_path)
    end
  end

  describe '#number_attending' do
    it 'counts guests attending the specified wedding or both' do
      controller.send(:number_attending, all_guests, 'saratoga_springs').should == 6
      controller.send(:number_attending, all_guests, 'thailand').should == 7
    end

    it 'returns 0 if no guests attending specified wedding' do
      controller.send(:number_attending, [guest_neither, guest_ss], 'thailand').should == 0
      controller.send(:number_attending, [], 'thailand').should == 0
    end
  end
end
