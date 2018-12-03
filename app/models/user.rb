class User < ApplicationRecord
  has_secure_password
  validates :email, uniqueness: true
  has_many :user_books
  has_many :books, through: :user_books
  
end
