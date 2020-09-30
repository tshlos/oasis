class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :city
  # has_many :favorites
end
