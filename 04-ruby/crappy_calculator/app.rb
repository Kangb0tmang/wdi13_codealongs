require 'yahoofinance'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
   erb :index
end

get '/answer' do
   # binding.pry
   @num1 = params[:first].to_i
   @num2 = params[:second].to_i
   @calculate = ''
   @operators = params[:operators]
   if @operators == "+"
      @calculate = @num1 + @num2
   elsif @operators == "-"
      @calculate = @num1 - @num2
   elsif @operators == "*"
      @calculate = @num1 * @num2
   elsif @operators == "/"
      @calculate = @num1 / @num2
   end
   # OR
   # Remove the '@' to use method below
   erb :answer
   # :locals => {:banana => num1, :apple => num2}
end
