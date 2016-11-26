class Answer < ActiveRecord::Base
  belongs_to :user
  belongs_to :question
  has_many :comments, as: :commentable
  has_many :votes, as: :voteable

  validates_presence_of :text

  def points
    self.votes.sum(:vote_direction)
  end
  def time_since_creation
  ((Time.now - created_at)/3600).round
 end
end
