require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  @name = 'Jon'
  erb :index
end
