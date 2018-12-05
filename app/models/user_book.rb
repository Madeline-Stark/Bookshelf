class UserBook < ApplicationRecord
  belongs_to :book
  belongs_to :user

  def self.read
    where(finished: true)
  end

  def self.unread
    where(finished: false)
  end


end
