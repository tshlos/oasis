class RooftopPark < ApplicationRecord
  belongs_to :city
  has_many :favorites, dependent: :destroy
  has_many :users, through: :favorites

end
