require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

require_relative 'db_config'
require_relative 'models/comment'
require_relative 'models/dish'
require_relative 'models/user'

# Sinatra provides this feature
enable :sessions

helpers do
  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    # These 2 do the exact same thing
    !!current_user
    # if current_user
    #    return true
    # else
    #    return false
    # end
  end
end

# Create
get '/dishes/new' do
  erb :new
end

post '/dishes' do
  dish = Dish.new
  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.save
  redirect '/dishes'
end

# Read
get '/' do
  @dishes = Dish.all.order(created_at: :asc).limit(3)
  erb :index
end

get '/dishes' do
  @dishes = Dish.all
  erb :dishes
end

get '/dishes/:id' do
  @dish = Dish.find(params[:id])
  @comments = Comment.where(dish_id: params[:id])
  erb :show
end

# Update
get '/dishes/:id/edit' do
  @dish = Dish.find(params[:id])
  erb :edit
end

put '/dishes/:id' do
  dish = Dish.find(params[:id])
  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.save
  redirect "/dishes/#{params[:id]}"
end

# Delete
delete '/dishes/:id' do
  redirect '/login' unless logged_in?

  @dish = Dish.find(params[:id])
  @dish.destroy
  redirect '/dishes'
end

# Login
get '/login' do
  @message = ''
  erb :login
end

post '/session' do
  # Find the user
  user = User.find_by(email: params[:email])

  # If found a user
  if user && user.authenticate(params[:password])
    # successful create session then redirect
    # session = {} (is a hash)
    session[:user_id] = user.id
    redirect '/'
  else
    @message = 'Incorrect email or password'
    erb :login
  end
end

delete '/session' do
  session[:user_id] = nil
  redirect '/login'
end

# Comments
post '/comments' do
  comment = Comment.new
  comment.content = params[:content]
  comment.dish_id = params[:dish_id]
  comment.user_id = current_user.id
  comment.save
  redirect "/dishes/#{params[:dish_id]}"
end

# binding.pry
