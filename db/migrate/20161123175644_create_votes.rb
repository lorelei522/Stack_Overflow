class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :voteable_id
      t.references :voter
      t.string :voteable_type
      t.integer :vote_direction, default: 0

      t.timestamps(null: false)
    end
  end
end