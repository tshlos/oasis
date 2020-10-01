class Api::V1::UsersController < ApplicationController

    def index
        users = User.all 
        render json: users
    end

    def create
        user = User.new(user_params)
        user.save!
        if user 
            render json: user
        else
            render json: { message: 'Username already taken'}
        end
    end

    def login
        user = User.find_by(username:params[:username])
        user.password = 'password'
        user.password_confirmation = 'password'
        user.save
        if user && user.authenticate('password')
        # if user && user.authenticate(password:params[:password])
            render json: { id: user.id, username: user.username } 
        else
            render json: { error: 'Boo' }
        end
    end

    def show 
        user = User.find_by(id: params[:id])
        render json: user
        # if user 
        #     render json: user
        # else 
        #     render json: {message: 'This user does not exist'}
        # end
    end

    def update 
        user = User.find_by(id: params[:id])

        if user.update(user_params)
            render json: user
        else 
            render json: {error: 'User could not be updated'}
        end
    end

    def destroy 
        user = User.find(id: params[:id])
        user.destroy
        render json:{message: "User has been deleted"}
    end

    private 
    def user_params 
        params.require(:user).permit(:id, :username, :password, :city_id)
    end
end
