require 'pg'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'

def db_connect(sql)
   conn = PG.connect(dbname: 'goodfoodhunting')
   result = conn.exec(sql)
   conn.close
   return result
end

# Create
get '/dishes/new' do
   erb :new
end

post '/dishes' do
   sql = "INSERT INTO dishes(name, image_url) VALUES('#{params[:name]}', '#{params[:image_url]}');"
   db_connect(sql)
   redirect '/dishes'
end

# Read
get '/' do
  redirect '/dishes'
end

get '/dishes' do
   # @dishes = conn.exec('SELECT * FROM dishes;')
   @dishes = db_connect('SELECT * FROM dishes;')
   erb :dishes
end

get '/dishes/:id' do
   sql = "SELECT * FROM dishes WHERE id = #{params[:id]};"
   @dish = db_connect(sql).first
   erb :show
end

# Update
get '/dishes/:id/edit' do
   sql = "SELECT * FROM dishes WHERE id = #{params[:id]};"
   @dish = db_connect(sql).first
   erb :edit
end

put '/dishes/:id' do
   sql = "UPDATE dishes SET name = '#{params[:name]}', image_url = '#{params[:image_url]}' WHERE id = #{params[:id]};"
   db_connect(sql)
   redirect "/dishes/#{params[:id]}"
end

# Delete
delete '/dishes/:id' do
   sql = "DELETE FROM dishes WHERE id = #{params[:id]};"
   db_connect(sql)
   redirect '/dishes'
end

# get '/dish-details' do
#    conn = PG.connect(dbname: 'goodfoodhunting')
#    sql = "SELECT * FROM dishes WHERE id = #{params[:id]};"
#    @dish = conn.exec(sql).first
#    erb :show
# end
