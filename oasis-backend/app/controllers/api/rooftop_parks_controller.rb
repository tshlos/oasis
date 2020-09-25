class Api::V1::RooftopParksController < ApplicationController
    def index 
        rooftop_parks = RooftopPark.all
        render json: rooftop_parks
    end

    def show 
        rooftop_park = RooftopPark.find(params[:id])
        render json: rooftop_park
    end
end
