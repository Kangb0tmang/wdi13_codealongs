require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/fries' do
   if params['size'] == 'small'
      return 'Small Fries for you'
   elsif params['size'] == 'medium'
      return 'Medium Fries for you'
   elsif params['size'] == 'large'
      return 'Large Fries for you'
   end
end
