class User < ApplicationRecord
  belongs_to :city
  has_many :favorites, dependent: :destroy
  has_many :rooftop_parks, through: :favorites
  
  has_secure_password
  validates :username, uniqueness: true


end
