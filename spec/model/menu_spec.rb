require "rails_helper"

FactoryBot.define do
  factory :menu do
    name {}
    type {}
    price {}
    photo_url {}
  end
end

RSpec.describe Menu, type: :model do
  let(:menu) { build(:menu, name: 'Fish', type: 'side', price: 20) }
  subject { menu }

  it { should respond_to(:type) }
  it { should respond_to(:name) }
  it { should respond_to(:price) }
  it { should respond_to(:photo_url) }
  it { should be_valid }

  describe "should be invalid if name is blank" do
    let(:menu) { build(:menu, type: 'side', price: 20) }
    it { should_not be_valid }
  end

  describe "should be invalid if type is blank" do
    let(:menu) { build(:menu, name: 'Crayfish', price: 20) }
    it { should_not be_valid }
  end

  describe "should be invalid if price is blank" do
    let(:menu) { build(:menu, name: 'Crayfish') }
    it { should_not be_valid }
  end

  describe "should be valid if no photo is uploaded" do
    let(:menu) { build(:menu, type: 'soup', price: 20, name: 'Crayfish') }
    it { should be_valid }
  end
end
