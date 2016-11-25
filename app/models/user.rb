class User < ActiveRecord::Base
  has_secure_password

  has_many :questions, foreign_key: :author_id
  has_many :answers
  has_many :comments, foreign_key: :commenter_id
  has_many :votes, foreign_key: :voter_id

  validates_presence_of :username, :email
  validates_uniqueness_of :username, :email
end