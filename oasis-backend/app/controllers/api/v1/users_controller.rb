class Api::V1::UsersController < ApplicationController

    def index
        users = User.all 
        render json: users
    end

    def create
        user = User.new(user_params)
        user.save!
        render json: user
    end

    def login
        user = User.find_by(username:params[:username])
        user.password = 'password'
        user.password_confirmation = 'password'
        user.save
        if user && user.authenticate('password')
            render json: { id: user.id, username: user.username } 
        else
            render json: { error: 'Boo' }
        end
    end


    def show 
        user = User.find(params[:id])
        render json: user
    end

    def update 
        user = User.find(params[:id])
        user.update(user_params)
        render json: user
    end

    def destroy 
        user = User.find(params[:id])
        user.destroy
        render json:{message: "User has been deleted"}
    end

    private 
    def user_params 
        params.require(:user).permit(:id, :username, :password_digest, :city_id)
    end
end
