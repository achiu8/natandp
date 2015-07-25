class MainController < ApplicationController
  def create_guest
    @guest = Guest.new(params[:guest])
    if @guest.save
      render json: { success: true }, status: 200
    else
      render json: { errors: @guest.errors.full_messages }, status: 400
    end
  end
end
