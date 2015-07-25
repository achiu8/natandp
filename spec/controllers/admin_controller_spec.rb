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
      before { get :index, nil, admin_id: 'admin_id' }

      it 'renders successfully' do
        response.should be_success
        response.should render_template('index')
      end

      it 'retrieves and sets all guests' do
        guest = Guest.create
        assigns(:guests).should == [guest]
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
