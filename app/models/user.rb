class User < ActiveRecord::Base
  has_secure_password
  validates_presence_of :username, :email
  validates_uniqueness_of :username, :email

  has_many :questions, foreign_key: :author_id
  has_many :answers
  has_many :comments
  has_many :votes
end
