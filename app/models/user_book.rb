class UserBook < ApplicationRecord
  belongs_to :book
  belongs_to :user

  scope :finished, -> { where(finished?: true) }

end
