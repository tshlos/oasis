# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_24_231010) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.string "state"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.bigint "rooftop_park_id", null: false
    t.bigint "user_id", null: false
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["rooftop_park_id"], name: "index_favorites_on_rooftop_park_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "rooftop_parks", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "state"
    t.integer "zipcode"
    t.text "description"
    t.string "photo"
    t.bigint "city_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["city_id"], name: "index_rooftop_parks_on_city_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "city_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "favorites", "rooftop_parks"
  add_foreign_key "favorites", "users"
  add_foreign_key "rooftop_parks", "cities"
end
