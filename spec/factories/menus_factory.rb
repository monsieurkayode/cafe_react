FactoryBot.define do
  factory :menu do
    name      { FFaker::Name.name }
    type      { Menu.types.keys.sample }
    price     { FFaker::Number.decimal }
    photo_url { FFaker::Internet.http_url }
  end
end
