class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.string :songId
      t.string :name
      t.string :artists
      t.string :album
      t.string :albumArt

      t.timestamps
    end
  end
end
