# Use this for testing
# convenstions over configuration
# Already know db table is named dishes
class User < ActiveRecord::Base
   # plural
   has_many :comments
   # Adds 2 methods to user objects
   has_secure_password
end
