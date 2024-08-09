require 'rails_helper'

FactoryBot.define do
  factory :menu do
    name      { nil }
    type      { nil }
    price     { nil }
    photo_url { nil }
  end
end

RSpec.describe Menu, type: :model do
  subject { menu }

  let(:menu) { build(:menu, name: 'Fish', type: 'side', price: 20) }

  it { is_expected.to respond_to(:type) }
  it { is_expected.to respond_to(:name) }
  it { is_expected.to respond_to(:price) }
  it { is_expected.to respond_to(:photo_url) }
  it { is_expected.to be_valid }

  describe 'should be invalid if name is blank' do
    let(:menu) { build(:menu, type: 'side', price: 20) }

    it { is_expected.not_to be_valid }
  end

  describe 'should be invalid if type is blank' do
    let(:menu) { build(:menu, name: 'Crayfish', price: 20) }

    it { is_expected.not_to be_valid }
  end

  describe 'should be invalid if price is blank' do
    let(:menu) { build(:menu, name: 'Crayfish') }

    it { is_expected.not_to be_valid }
  end

  describe 'should be valid if no photo is uploaded' do
    let(:menu) { build(:menu, type: 'soup', price: 20, name: 'Crayfish') }

    it { is_expected.to be_valid }
  end
end
