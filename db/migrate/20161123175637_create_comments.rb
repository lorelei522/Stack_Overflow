class CreateComments < ActiveRecord::Migration
  def change
  create_table :users do |t|
      t.string :text, null: false

      t.string :commentable_type
      t.integer :commentable_id
      t.timestamps(null: false)
    end
  end
end
