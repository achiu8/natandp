class AdminController < ApplicationController
  def index
    if session[:admin_id]
      @guests = Guest.all
    else
      redirect_to login_path
    end
  end

  def verify_login
    session[:admin_id] = 'id'
    redirect_to admin_path
  end
end
