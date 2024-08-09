module Mutations
  class UpdateMenuMutation < Mutations::BaseMutation
    description "Update a single menu item"

    argument :menu_input, Mutations::MenuInput, required: true

    field :errors, Types::BaseScalar, null: true
    field :menu, Types::MenuType, null: true

    def resolve(menu_input:)
      menu = Menu.find(menu_input.id)
      if menu.update(menu_input.to_h)
        { menu: menu }
      else
        { errors: menu.errors.to_h }
      end
    end
  end
end
