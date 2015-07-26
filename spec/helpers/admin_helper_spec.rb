require 'rails_helper'

RSpec.describe AdminHelper, type: :helper do
  describe '#attending_to_words' do
    it 'returns the completed phrase with proper capitalization' do
      attending_to_words(:neither).should == 'attending neither'
      attending_to_words(:both).should == 'attending both'
      attending_to_words(:saratoga_springs).should == 'attending Saratoga Springs'
      attending_to_words(:thailand).should == 'attending Thailand'
    end
  end
end
