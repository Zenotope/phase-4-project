class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :songId, :name, :artists, :album, :albumArt, :user_id
end
