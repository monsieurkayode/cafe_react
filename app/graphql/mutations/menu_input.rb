module Mutations
  class MenuInput < Types::BaseInputObject
    argument :name, String, required: false
    argument :price, String, required: false
    argument :type, String, required: false
    argument :photo_url, String, required: false
  end
end