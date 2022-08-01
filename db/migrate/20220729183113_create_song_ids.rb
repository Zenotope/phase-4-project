class CreateSongIds < ActiveRecord::Migration[7.0]
  def change
    create_table :song_ids do |t|
      t.string :songId

      t.timestamps
    end
  end
end
