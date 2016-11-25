class CreateQuestions < ActiveRecord::Migration
  def change
     create_table :questions do |t|
      t.string :title, null: false
      # add this so people can clarify on question
      t.string :description
      t.references :author
      t.integer :best_answer_id

      t.timestamps(null: false)
    end
  end
end
