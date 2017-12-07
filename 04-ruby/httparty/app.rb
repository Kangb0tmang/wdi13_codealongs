require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'

results = HTTParty.get('http://api.fixer.io/latest')

binding.pry
