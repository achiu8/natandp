class AdminController < ApplicationController
  before_filter :login_required, only: [:index]

  def index
    render locals: { guests: Guest.all }
  end

  def verify_login
    session[:admin_id] = 'id'
    redirect_to admin_path
  end

  private

  def login_required
    if !session[:admin_id]
      redirect_to login_path
    end
  end

  def number_attending(guests, wedding)
    guests.to_a.count { |guest| guest.attending == wedding || guest.attending == 'both' }
  end
end
