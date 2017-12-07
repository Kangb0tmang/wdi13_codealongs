require 'httparty'
require 'pry'

response = HTTParty.get("http://omdbapi.com/t=minions&apikey=#{ENV['OMDB_API_KEY']}")
# binding.pry
