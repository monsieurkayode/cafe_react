module Mutations
  class MenuInput < Types::BaseInputObject
    argument :name, String, required: true
    argument :price, Float, required: true
    argument :type, String, required: true
    argument :photo_url, String, required: false
  end
end