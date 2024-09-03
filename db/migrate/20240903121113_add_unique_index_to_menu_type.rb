class AddUniqueIndexToMenuType < ActiveRecord::Migration[5.2]
  def change
    add_index :menus, [:name, :type], unique: true
  end
end
