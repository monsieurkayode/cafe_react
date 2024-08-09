# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

menus = [
  { 'name' => 'Basmati', 'price' => 12.45, 'type' => 'soup',
    'photo_url' => 'https://cdn.filestackcontent.com/gAyDun4HQVyy7GKwTTXv' },
  { 'name' => 'Bagel', 'price' => 10.68, 'type' => 'soup', 'photo_url' => '' },
  { 'name' => 'Egg White', 'price' => 28.54, 'type' => 'main_course',
    'photo_url' => 'https://cdn.filestackcontent.com/sJb54Kr4TPmZVdNRrGhS' },
  { 'name' => 'Noodles', 'price' => 10, 'type' => 'side',
    'photo_url' => 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' },
  { 'name' => 'Cerelac Cream', 'price' => 5, 'type' => 'side', 'photo_url' => 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
]

Menu.create(menus)
