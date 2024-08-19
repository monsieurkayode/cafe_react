require 'rails_helper'

RSpec.describe Menu do
  subject { menu }

  describe '#associations' do
    let(:menu) { build(:menu, name: 'Fish', type: 'side', price: 20) }

    it { is_expected.to be_valid }
    it { is_expected.to respond_to(:type) }
    it { is_expected.to respond_to(:name) }
    it { is_expected.to respond_to(:price) }
    it { is_expected.to respond_to(:photo_url) }
  end

  describe '#validations' do
    context 'should be invalid if name is blank' do
      let(:menu) { build(:menu, name: nil) }

      it { is_expected.not_to be_valid }
      it 'raises and ActiveRecord::RecordInvalid error' do
        expect { subject.save! }.to raise_error(ActiveRecord::RecordInvalid).with_message('Validation failed: Name can\'t be blank')
      end
    end

    context 'should be invalid if type is blank' do
      let(:menu) { build(:menu, type: nil) }

      it { is_expected.not_to be_valid }
      it 'raises and ActiveRecord::RecordInvalid error' do
        expect { subject.save! }.to raise_error(ActiveRecord::RecordInvalid).with_message('Validation failed: Type can\'t be blank')
      end
    end

    context 'should be invalid if price is blank' do
      let(:menu) { build(:menu, price: nil) }

      it { is_expected.not_to be_valid }
      it 'raises and ActiveRecord::RecordInvalid error' do
        expect { subject.save! }.to raise_error(ActiveRecord::RecordInvalid).with_message('Validation failed: Price can\'t be blank')
      end
    end

    context 'should be valid if no photo is uploaded' do
      let(:menu) { build(:menu, photo_url: nil) }

      it { is_expected.to be_valid }
      it 'raises and ActiveRecord::RecordInvalid error' do
        expect { subject.save! }.not_to raise_error
      end
    end
  end
end
