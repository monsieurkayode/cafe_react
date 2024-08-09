module Mutations
  class MenuInput < Types::BaseInputObject
    argument :id, ID, required: false
    argument :name, String, required: false
    argument :price, Types::BaseScalar, required: false
    argument :type, String, required: false
    argument :photo_url, String, required: false
  end
end
