class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.references :rooftop_park, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.text :notes

      t.timestamps
    end
  end
end
