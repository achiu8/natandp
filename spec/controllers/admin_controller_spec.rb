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

      it 'retrieves and sets all guests if no attending param' do
        get :index, nil, admin_id: 'admin_id'
        assigns(:guests).should == all_guests
      end

      it 'retrieves and sets guests attending either or both if specific attending param' do
        get :index, { attending: :thailand }, { admin_id: 'admin_id' }
        assigns(:guests).should == [guest_thailand, guest_both]
      end

      it 'retrieves and sets only guests attending neither if neither attending param' do
        get :index, { attending: :neither }, { admin_id: 'admin_id' }
        assigns(:guests).should == [guest_neither]
      end

      it 'retrieves and sets only guests attending both if both attending param' do
        get :index, { attending: :both }, { admin_id: 'admin_id' }
        assigns(:guests).should == [guest_both]
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
