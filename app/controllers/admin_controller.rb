class AdminController < ApplicationController
  before_filter :login_required, only: [:index]

  def index
    attending = params[:attending] || Guest::ATTENDING_VALUES
    attending = [attending].concat([:both]) if attending != :neither.to_s
    render locals: { guests: Guest.where(attending: attending) }
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
end
