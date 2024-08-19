# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CafeController do
  describe 'GET #index' do
    before(:each) { get :index }

    it 'renders the index template' do
      expect(response).to render_template(:index)
    end

    it 'responds with a http success' do
      expect(response).to have_http_status(:success)
    end
  end
end
