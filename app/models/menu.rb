class Menu < ApplicationRecord
  self.inheritance_column = :_type_disabled

  enum type: {
    main_course: 0,
    side: 1,
    appetizer: 2,
    soup: 3,
    dessert: 4,
    cheese: 5,
    coffee: 6,
    palate_cleanser: 7,
    salad: 8,
    mignardise: 9,
    fish: 10
  }

  validates :price, :type, :name, presence: true
  validates :type, uniqueness: { scope: :name }

  default_scope { order('created_at DESC') }
end

# == Schema Information
#
# Table name: menus
#
#  id         :bigint           not null, primary key
#  name       :string
#  photo_url  :string
#  price      :decimal(10, 2)
#  type       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_menus_on_name_and_type  (name,type) UNIQUE
#
