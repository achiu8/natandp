require 'rails_helper'

RSpec.describe MainHelper, type: :helper do
  describe '#format_attending' do
    it 'converts snakecase symbols to title case strings' do
      format_attending(:neither).should == 'Neither'
      format_attending(:saratoga_springs).should == 'Saratoga Springs'
      format_attending(:thailand).should == 'Thailand'
      format_attending(:both).should == 'Both'
    end
  end
end
