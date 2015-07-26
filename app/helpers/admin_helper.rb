module AdminHelper
  def attending_to_words(attending)
    case attending
    when :neither, :both then "attending #{attending}"
    else                      "attending #{format_attending(attending)}"
    end
  end
end
