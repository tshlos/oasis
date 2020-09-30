class Api::V1::UsersController < ApplicationController

    def index
        users = User.all 
        render json: users
    end

    def create 
        user = User.new(user_params)
        render json: user
    end

    def login
        user = User.find_by(username:params[:username])
        if user && user.authenticate(params[:password])
            render json: user
        else
            render json: { error: 'Failed to login' }
        end
    end

    # def create
    #     user = User.create(user_params)
    #     if user.valid?
    #         render json: { user: UserSerializer.new(user) },
    #         status: created
    #     else
    #         render json: { error: 'Failed to create user' },
    #         status: :not_acceptable
    #     end
    # end

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
        params.require(:user).permit(:username, :password, :city_id)
    end
end
