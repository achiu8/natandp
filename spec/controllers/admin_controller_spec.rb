require 'rails_helper'

RSpec.describe AdminController, type: :controller do
  describe '#index' do
    context 'when not logged in' do
      before { get :index }

      it 'redirects to login page' do
        response.should redirect_to(login_path)
      end
    end

    context 'when logged in 'do
      let(:guest_neither)  { Guest.create(attending: :neither) }
      let(:guest_ss)       { Guest.create(attending: :saratoga_springs) }
      let(:guest_thailand) { Guest.create(attending: :thailand) }
      let(:guest_both)     { Guest.create(attending: :both) }
      let(:all_guests)     { [guest_neither, guest_ss, guest_thailand, guest_both] }

      it 'renders successfully' do
        get :index, nil, { admin_id: 'admin_id' }
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
end
