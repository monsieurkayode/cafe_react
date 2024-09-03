require 'rails_helper'

RSpec.describe Menu do
  subject(:menu) { menu }

  describe '#associations' do
    let(:menu) { build(:menu, name: 'Fish', type: 'side', price: 20) }

    it { is_expected.to be_valid }
    it { is_expected.to respond_to(:type) }
    it { is_expected.to respond_to(:name) }
    it { is_expected.to respond_to(:price) }
    it { is_expected.to respond_to(:photo_url) }
  end

  describe '#validations' do
    context 'when name is blank' do
      let(:menu) { build(:menu, name: nil) }

      it { is_expected.not_to be_valid }

      it 'raises and ActiveRecord::RecordInvalid error' do
        expect { menu.save! }.to raise_error(
          ActiveRecord::RecordInvalid
        ).with_message('Validation failed: Name can\'t be blank')
      end
    end

    context 'when type is blank' do
      let(:menu) { build(:menu, type: nil) }

      it { is_expected.not_to be_valid }

      it 'raises and ActiveRecord::RecordInvalid error' do
        expect { menu.save! }.to raise_error(
          ActiveRecord::RecordInvalid
        ).with_message('Validation failed: Type can\'t be blank')
      end
    end

    context 'when type already exists for menu name' do
      let(:name) { :samosa }
      let(:type) { :appetizer }
      let!(:menu) { create(:menu, name: name, type: type) }
      let(:duplicate_menu_type) { build(:menu, name: name, type: type) }

      it 'raises and ActiveRecord::RecordInvalid error' do
        expect { duplicate_menu_type.save! }.to raise_error(
          ActiveRecord::RecordInvalid
        ).with_message('Validation failed: Type has already been taken')
      end
    end

    context 'when price is blank' do
      let(:menu) { build(:menu, price: nil) }

      it { is_expected.not_to be_valid }

      it 'raises and ActiveRecord::RecordInvalid error' do
        expect { menu.save! }.to raise_error(
          ActiveRecord::RecordInvalid
        ).with_message('Validation failed: Price can\'t be blank')
      end
    end

    context 'when no photo is uploaded' do
      let(:menu) { build(:menu, photo_url: nil) }

      it { is_expected.to be_valid }

      it 'raises and ActiveRecord::RecordInvalid error' do
        expect { menu.save! }.not_to raise_error
      end
    end
  end
end
