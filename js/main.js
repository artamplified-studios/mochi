/*
* 	Mochi library
*	--
*	Experimental project inspired by jquery and bootstrap to better understand programming patterns.
*	This project is a study of the javascript module programming pattern.
*/

var Mochi = (function($) {

	if(typeof(jQuery) === 'undefined') {
		console.warn('Mochi needs jQuery, missing dependency');
		return false;
	}

	var about = {
		version: '0.1.0',
		author: 'Kiran Mertopawiro',
<<<<<<< HEAD
		description: 'Named after my fluffy cat Mochi, a collection of usefull components',
=======
		description: 'Named after my fluffy cat Mochi, a collection of usefull components'
>>>>>>> development
	}

	var deviceInfo = {
		screenWidth: screen.width,
		screenHeight: screen.height,
		documentWidth: $(window).width(),
		documentHeight: $(window).height()
	}

	var list = [];


	return {
		about: 			about,
		deviceInfo: 	deviceInfo,
		list: 			list
	}

})(jQuery);