module Types
  class MenuType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :price, Float, null: false
    field :type, String, null: false
    field :photo_url, String, null: true
  end
end