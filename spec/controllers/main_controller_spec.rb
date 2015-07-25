require 'rails_helper'

RSpec.describe MainController, type: :controller do
  describe '#index' do
    before { get :index }

    it 'renders successfully' do
      response.should be_success
      response.should render_template('index')
    end
  end

  describe '#create_guest' do
    it 'returns success on success' do
      post :create_guest
      response.status.should == 200
      response.body.should == { success: true }.to_json
    end

    it 'returns 400 on failure' do
      guest = Guest.new
      guest.stub(save: false)
      Guest.stub(new: guest)
      post :create_guest
      response.status.should == 400
    end
  end
end
