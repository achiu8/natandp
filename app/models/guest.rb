class Guest < ActiveRecord::Base
  ATTENDING_VALUES = [:neither, :saratoga_springs, :thailand, :both]

  def name
    "#{first_name} #{last_name}"
  end
end
