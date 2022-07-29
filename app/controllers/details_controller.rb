class DetailsController < ApplicationController

    RSpotify.authenticate("fec250ff07e1426791fdce87aa5046cd", "907dc836b8d54000a4fff30dccf59057"  )

    def show
        trackId = '3S2R0EVwBSAVMd5UMgKTL0'
        track = RSpotify::Track.find(trackId).audio_features
        render json: track
    end
end


# '3S2R0EVwBSAVMd5UMgKTL0'