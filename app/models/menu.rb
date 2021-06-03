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

  validates_presence_of :price, :type
  validates :name, presence: true, uniqueness: true
end
