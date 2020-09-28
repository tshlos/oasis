class CreateRooftopParks < ActiveRecord::Migration[6.0]
  def change
    create_table :rooftop_parks do |t|
      t.float :lat
      t.float :lng
      t.string :name
      t.string :address
      t.string :state
      t.integer :zipcode
      t.text :description
      t.string :photo
      t.references :city, null: false, foreign_key: true

      t.timestamps
    end
  end
end
