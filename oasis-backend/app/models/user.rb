class User < ApplicationRecord
  belongs_to :city
  has_many :favorites, dependent: :destroy
  has_many :rooftop_parks, through: :favorites

end
