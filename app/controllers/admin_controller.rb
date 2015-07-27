class AdminController < ApplicationController
  before_filter :login_required, only: [:index]

  def index
    guests = Guest.all
    number_attending_saratoga_springs = number_attending(guests, 'saratoga_springs')
    number_attending_thailand = number_attending(guests, 'thailand')
    render locals: {
      guests: guests,
      number_attending_saratoga_springs: number_attending_saratoga_springs,
      number_attending_thailand: number_attending_thailand
    }
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
    guests_attending = guests.select { |guest| guest.attending == wedding || guest.attending == 'both' }
    return 0 if guests_attending.empty?
    guests_attending.map(&:plus_ones).reduce(:+) + guests_attending.length
  end
end
