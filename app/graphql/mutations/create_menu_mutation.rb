module Mutations
  class CreateMenuMutation < Mutations::BaseMutation
    description "Add a single menu item"
  
    argument :menu_input, Mutations::MenuInput, required: true

    field :errors, Types::BaseScalar, null: true
    field :menu, Types::MenuType, null: true

    def resolve(menu_input:)
      menu = Menu.new(menu_input.to_h)
      if menu.save
        { menu: menu }
      else
        { errors: menu.errors.to_h }
      end
    end
  end
end