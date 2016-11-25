class Vote < ActiveRecord::Base
  belongs_to :voter, class_name: "User"
  belongs_to :voteable, polymorphic: true
  validates_uniqueness_of :voter, scope: [:voteable_id, :voteable_type]
end