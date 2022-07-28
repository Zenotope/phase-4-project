class TracksController < ApplicationController

    
    RSpotify.authenticate("fec250ff07e1426791fdce87aa5046cd", "907dc836b8d54000a4fff30dccf59057"  )

    def index
        tracks = RSpotify::Track.search('Thriller', limit: 16)
        render json: tracks
    end
end
