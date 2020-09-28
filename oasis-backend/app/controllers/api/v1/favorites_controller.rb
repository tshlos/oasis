class Api::V1::FavoritesController < ApplicationController
    def index
        favorites = Favorite.all 
        render json: favorites
    end

    def create 
        favorite = Favorite.new(favorite_params)
        render json: favorite
    end

    def show 
        favorite = Favorite.find(params[:id])
        render json: favorite
    end

    def update 
        favorite = Favorite.find(params[:id])
        favorite.update(favorite_params)
        render json: favorite
    end

    def destroy 
        favorite = Favorite.find(params[:id])
        favorite.destroy
        render json:{message: "favorite has been deleted"}
    end
    private 

    def favorite_params 
        params.require(:favorite).permit(:rooftop_park_id, :user_id, :notes)
    end


end
