class User < ApplicationRecord
  belongs_to :city
  has_many :rooftop_parks, through: :city
  has_many :favorites, dependent: :delete_all
  
end
