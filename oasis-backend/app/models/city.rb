class City < ApplicationRecord
    has_many :rooftop_parks, dependent: :destroy
    has_many :users, dependent: :destroy
end
