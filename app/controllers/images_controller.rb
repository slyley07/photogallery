class ImagesController < ApplicationController
	def index
		@thing = Client.new
		@album = @thing.parse_album
		@images = @thing.parse_photos
	end
end
