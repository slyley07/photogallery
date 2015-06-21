
$(document).ready(function(){
	// set up objects for the images, thumbs, and respective image info
	var img1 = { 	big: { image: ".big.1",
											 title: ".title.1",
											 info: ".info.1"
											},
								small: ".small.1"
							};

	var img2 = {  big: { image: ".big.2",
								       title: ".title.2",
								       info: ".info.2"
								     },
							  small: ".small.2"
							};

	var img3 = {	big: { image: ".big.3",
									     title: ".title.3",
									     info: ".info.3"
									   },
								small: ".small.3"
							};

	var img4 = {	big: { image: ".big.4",
									     title: ".title.4",
									     info: ".info.4"
									   },
								small: ".small.4"
							};

	var img5 = {	big: { image: ".big.5",
									     title: ".title.5",
									     info: ".info.5"
									   },
								small: ".small.5"
							};

	var img6 = {	big: { image: ".big.6",
									     title: ".title.6",
									     info: ".info.6"
									   },
								small: ".small.6"
							};

	// assign all objects to an array and find its length
	var images = [img1, img2, img3, img4, img5, img6];
	var imgLeng = images.length;

	// function for making the thumbs opaque
	function opacity(j) {
		$(j.small).addClass('opaque');
		$(j.small).css('height', '60px');
	};

	// function to remove the opaque class and increases the height
	function noOpacity(e) {
		$(e.small).css('height', '80px').removeClass('opaque');
	};

	// function for fading out the large image and information
	function fadeOut(k) {
		// loop through all properties in a given object
		for (var key in k.big) {
			if (k.big.hasOwnProperty(key)){
				// fade out all of the properties of the object
				$(k.big[key]).fadeOut("fast");
			};
		};
	};

	// function for fading in the large image and information
	function fadeIn(x) {
		// loop through all properties in a given object
		for (var key in x.big){
			// fade in all of the properties of the object
			if (x.big.hasOwnProperty(key)){
				$(x.big[key]).fadeIn("slow");
			};
		};
	};

	// function for highlighting the chosen thumb and removing the opacity
	function opaqThumb(notOpaque) {
		for (var m = 0; m < imgLeng; m++) {
			if (images[m] === notOpaque) {
				fadeIn(notOpaque);
				noOpacity(notOpaque);
			} else {
				fadeOut(images[m]);
				opacity(images[m]);	
			};
		};
	};

	// function for clicking a thumb and having the large image pop up
	function clicker(show) {
		$(show.small).click(function(){
			// calling the noOpacity function on the clicked object
			noOpacity(show)		
			// calling the opaqThumb function on the clicked object
			opaqThumb(show);
		});
	};

	// function for moving one forward in the array
	$('.right').click(function(){
		// looping through all of the objects
		for (var y = 0; y < imgLeng; y++) {
			// logic for figuring out which object is visible
			if ($(images[y].big.image).is(':visible')){
				// logic for returning to the first object if the left button is clicked on the last object
				if (images[y] !== images[imgLeng -1]){
					fadeIn(images[y + 1]);
					noOpacity(images[y + 1]);
					fadeOut(images[y]);
					opacity(images[y]);
					break;
				} else {
					fadeIn(images[0]);
					noOpacity(images[0]);
					fadeOut(images[y]);
					opacity(images[y]);
				};
			};
		};
	});

	//function for moving one back in the array
	$('.left').click(function(){
		for (var z = 0; z < imgLeng + 1; z++) {
			if ($(images[z].big.image).is(':visible')) {
				//logic for returning to the last object if the left button is clicked on the first object
				if (images[z] === images[0]){
					fadeIn(images[imgLeng - 1]);
					noOpacity(images[imgLeng - 1]);
					fadeOut(images[z]);
					opacity(images[z]);
					break;
				} else {
					fadeIn(images[z - 1]);
					noOpacity(images[z - 1]);
					fadeOut(images[z]);
					opacity(images[z]);
					break;
				};
			};
		};
	});

	// hide the images and image info from the start
	// the default position is the first image
	for (var i = 1; i < imgLeng; i++) {
		for (var key in images[i].big){
			if (images[i].big.hasOwnProperty(key)){
				$(images[i].big[key]).hide();
			};
		};
		// add opacity to the thumbs from the start
		opacity(images[i]);
	};
	
	// the first image is highlighted by default
	$(images[0].small).css('height', '80px');

	// logic allowing a thumb to only be clicked when its image isn't showing
	for (var r = 0; r < imgLeng; r++){
		if ($(images[r]).length) {
			// calling the clicker function 
			clicker(images[r]);
		};
	};
})