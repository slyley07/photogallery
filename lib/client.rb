require 'json'

class Client
	def initialize
		@file = File.read(Rails.root.join('lib', 'gallery_json.js'))
		@parsed = JSON.parse(@file)
	end

	def parse_album
		album = @parsed["album"]
	end

	def parse_photos
		photos =  @parsed["photos"]
		photos.map do |photo|
			Image.new(photo["id"], photo["url"], photo["thumb_url"], photo["title"], photo["date"], photo["location"])
		end
	end	
end