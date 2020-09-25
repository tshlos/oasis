class RooftopPark < ApplicationRecord
  belongs_to :city
  has_many :users, through: :city
  has_many :favorites, dependent: :delete_all
end
