class Question < ActiveRecord::Base
  belongs_to :author, class_name: "User"
  has_many :answers
  has_many :comments, as: :commentable
  has_many :votes, as: :voteables

  validates_presence_of :title
end 