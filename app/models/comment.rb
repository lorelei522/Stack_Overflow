class Comment < ActiveRecord::Base
  belongs_to :commenter, class_name: "User"
  has_many :votes, as: :voteable
  belongs_to :commentable, polymorphic: true

  validates_presence_of :text
end