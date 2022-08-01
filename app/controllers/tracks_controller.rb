class TracksController < ApplicationController
    RSpotify.authenticate("fec250ff07e1426791fdce87aa5046cd", "907dc836b8d54000a4fff30dccf59057"  )

    def test
            # tracks = RSpotify::Track.search('thriller', limit: 16)
            render plain: "OK"
    end

    def search
        tracks = RSpotify::Track.search(search_params)
        render json: tracks
    end

    private
        def search_params
            params[:s]
        end

end
