class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.string :name
      t.decimal :price, precision: 10, scale: 2
      t.integer :type
      t.string :photo_url

      t.timestamps
    end
  end
end
