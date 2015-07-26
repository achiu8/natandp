module MainHelper
  def format_attending(attending)
    attending.to_s.gsub('_', ' ').titleize
  end
end
