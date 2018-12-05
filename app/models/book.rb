class Book < ApplicationRecord
  belongs_to :author
  has_many :users_books
  has_many :users, through: :users_books

  validates :title, uniqueness: true
  validates :title, presence: true

  accepts_nested_attributes_for :users_books

end
