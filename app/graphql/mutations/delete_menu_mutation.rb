module Mutations
  class DeleteMenuMutation < Mutations::BaseMutation
    description "Delete a single menu item"

    argument :id, ID, required: true

    field :errors, [String], null: true
    field :menu, Types::MenuType, null: true

    def resolve(id:)
      menu = Menu.find(id)
      if menu.destroy
        { menu: menu }
      else
        { errors: menu.errors.full_messages }
      end
    end
  end
end