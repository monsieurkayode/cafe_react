module Types
  class MutationType < Types::BaseObject
    field :create_menu, mutation: Mutations::CreateMenuMutation
    field :delete_menu, mutation: Mutations::DeleteMenuMutation
    field :update_menu, mutation: Mutations::UpdateMenuMutation
  end
end
