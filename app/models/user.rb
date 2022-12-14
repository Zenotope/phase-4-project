class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true, length: {minimum: 3}
    validates :password, presence: true

    has_many :favorites 
    # has_many :songIds, through: :favorites
end
