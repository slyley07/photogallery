class Image
	
	attr_reader :id, :url, :thumb_url, :title, :date, :location

	def initialize(id, url, thumb_url, title, date, location)
		@id = id
		@url = url
		@thumb_url = thumb_url
		@title = title
		@date = date
		@location = location
	end

	def everything
		"#{@id}, #{@url}, #{@thumb_url}, #{@title}, #{@date}, #{@location}" 
	end
end