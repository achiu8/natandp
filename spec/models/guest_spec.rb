require 'rails_helper'

RSpec.describe Guest, type: :model do
  describe '#name' do
    it 'returns the full name' do
      first_name = 'Bob'
      last_name = 'Smith'
      guest = Guest.create!(first_name: first_name, last_name: last_name)

      guest.name.should == "#{first_name} #{last_name}"
    end
  end
end
