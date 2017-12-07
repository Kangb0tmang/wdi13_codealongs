require 'sinatra'
require 'sinatra/reloader'

comments = ['lol', 'teehee']

get '/' do
   @comments = comments
  erb :index
end

post '/leave_comment' do
   @comments = comments
   comments.push(params[:body])
   # erb(:index, locals: { guest_comments: comments })
   redirect '/'
end
