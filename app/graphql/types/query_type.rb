module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :menus, [Types::MenuType], null: true do
      description "Return a list of menus"
      
      def resolve(obj, args, ctx)
        Menu.limit(25)
      end
    end

    field :menu, Types::MenuType, null: true do
      description "Fetch a menu item"
      argument :id, ID, required: true
      
      def resolve(obj, args, ctx)
        Menu.find(args[:id])
      end
    end

    field :types, [String], null: true do
      description "Fetch a menu types"
      
      def resolve(obj, args, ctx)
        Menu.types.keys
      end
    end
  end
end
