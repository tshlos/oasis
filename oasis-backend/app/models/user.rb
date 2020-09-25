class User < ApplicationRecord
  has_many :rooftop_parks, through: :cities
  has_many :favorites, dependent: :delete_all
  belongs_to :city
end
