class Comment < ActiveRecord::Base
  belongs_to :commenter, class_name: "User"
  has_many :votes, as: :voteable
  belongs_to :commentable, polymorphic: true

  validates_presence_of :text
  def date_of_creation
    self.created_at.to_date.strftime("%e %b %Y")
  end
end
