class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :city
  # validates :username, uniqueness: true
end
