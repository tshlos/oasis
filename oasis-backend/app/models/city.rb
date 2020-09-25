class City < ApplicationRecord
    has_many :rooftop_parks, dependent: :delete_all
    has_many :users, dependent: :delete_all
end
