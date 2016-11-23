class CreateAnswers < ActiveRecord::Migration
  def change
      create_table :users do |t|
      t.string :text, null: false
      t.references :question, null :false
      t.references :user, null :false
      t.timestamps(null: false)
    end
  end
end
