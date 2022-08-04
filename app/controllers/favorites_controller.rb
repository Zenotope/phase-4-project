class FavoritesController < ApplicationController
    # before_action :authorize

    def index
        render json: Favorite.all
    end

    def show
        favorite = Favorite.find(params[:songId])
        render json: favorite
    end

    def add
        song = Favorite.create!(song_params)
        render json: song, status: :created
    end

    def destroy
        song = Favorite.find(params[:songId])
       song.destroy
       head :no_content
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def song_params
        params.permit(:songId, :name, :artists, :album, :albumArt)
    end

end
