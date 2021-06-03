module Mutations
  class UpdateMenuMutation < Mutations::BaseMutation
    description "Update a single menu item"
  
    argument :id, ID, required: true
    argument :menu_input, Mutations::MenuInput, required: true

    field :menu, Types::MenuType, null: true
    field :errors, [String], null: true

    def resolve(id:, menu_input:)
      menu = Menu.find(id)
      if menu.update(menu_input.to_h)
        { menu: menu }
      else
        { errors: menu.errors.full_messages }
      end
    end
  end
end