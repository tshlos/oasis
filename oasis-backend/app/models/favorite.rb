class Favorite < ApplicationRecord
  belongs_to :rooftop_park
  belongs_to :user
end
