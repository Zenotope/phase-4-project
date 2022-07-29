class SongIdController < ApplicationController

    def show
        songId = SongId.first
        render json: songId
    end
end
