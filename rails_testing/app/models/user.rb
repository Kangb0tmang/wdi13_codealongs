class User < ApplicationRecord
  has_secure_password

  has_many :tweets

  validates :password, length: { minimum: 8 }
end
