class Api::V1::CitiesController < ApplicationController

    def index 
        cities = City.all
        render json: cities, except: [:created_at, :updated_at]
    end

    def show
        city = City.find(params[:id])
        render json: cities
    end
end
