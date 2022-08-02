class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :songId, :name, :artists, :album, :albumArt
end
