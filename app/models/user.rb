class User < ApplicationRecord
  has_many :users_books
  has_many :books, through: :users_books

  has_secure_password
  validates :email, uniqueness: true
  validates :email, presence: true
  validates :name, presence: true

  accepts_nested_attributes_for :users_books

end
