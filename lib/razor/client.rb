require 'json'

class Client
	def initialize
		@file = File.read('../../app/assets/javascripts/gallery_json.js')
	end

	def make_request
		parsed = JSON.parse(@file)
		photos =  parsed["photos"]
		photos.map do |photo|
			Image.new(photo["id"], photo["url"], photo["thumb_url"], photo["title"], photo["date"], photo["location"])
		end
	end	
end

class Image
	def initialize(id, url, thumb_url, title, date, location)
		@id = id
		@url = url
		@thumb_url = thumb_url
		@title = title
		@date = date
		@location = location
	end

	def everything
		puts "#{@id}, #{@url}, #{@thumb_url}" 
	end

	def id
		puts @id
	end 

	def url
		puts @url
	end

	def thumb_url
		puts @thumb_url
	end

	def title
		puts @title
	end

	def date
		puts @date
	end

	def location
		puts @location
	end
end

red = Client.new
all = red.make_request

all.each do |num|
	puts num
end

