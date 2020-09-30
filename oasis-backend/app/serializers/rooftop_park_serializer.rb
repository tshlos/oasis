class RooftopParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :state, :zipcode, :description, :photo, :lat, :lng, :city, :favorites, :users
  
end