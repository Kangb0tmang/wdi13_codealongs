class LeapYear
  def self.check(year)
    if (year % 100).zero? && !(year % 400).zero?
      return false
    end

    (year % 4).zero?
  end
end
