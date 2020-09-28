class Api::V1::RooftopParksController < ApplicationController
    
    def index 
        rooftop_parks = RooftopPark.includes(:city).all
        render json: rooftop_parks, include: [:city], except: [:created_at, :updated_at]
    end

    def show 
        rooftop_park = RooftopPark.find(params[:id])
        render json: rooftop_park
    end
end
