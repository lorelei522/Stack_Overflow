class CreateQuestions < ActiveRecord::Migration
  def change
     create_table :users do |t|
      t.string :text, null: false
      t.references :author
      t.string :answer_id
      t.timestamps(null: false)
    end
  end
end
