class Author < ApplicationRecord
  has_many :books

  validates :name, uniqueness: true
  validates :name, presence: true

end
