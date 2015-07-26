class MainController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create_guest
    @guest = Guest.new(guest_params)
    if @guest.save
      render json: { success: true }, status: 200
    else
      render json: { errors: @guest.errors.full_messages }, status: 400
    end
  end

  private

  def guest_params
    params.require(:guest).permit!
  end
end
