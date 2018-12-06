class User < ApplicationRecord
  has_many :user_books
  has_many :books, through: :user_books

  has_secure_password
  validates :email, uniqueness: true
  validates :email, presence: true
  validates :name, presence: true

end
