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
		description: 'Named after my fluffy cat Mochi, a collection of usefull components',
	}

	var deviceInfo = {
		screenWidth: screen.width,
		screenHeight: screen.height,
		documentWidth: $(window).width(),
		documentHeight: $(window).height()
	}


	return {
		about: 			about,
		deviceInfo: 	deviceInfo
	}

})(jQuery);
/*
*	video carousel plugin for Mochi
*/

(function( _mochi ) {
	//console.log( _mochi );

	if(typeof(jQuery) === 'undefined') {
		return false;
	}

	_mochi.carousel = (function() {

		var classNames = 			['video-carousel', 'item'];
		var attributesNames = 		['display'];

		var carousel = 				$('body').find( '.' + classNames );
		var playCount = 			0;

		var defaultSize = {
			width: '100%',
			height: 'auto'
		}


		var init = function() {
			var self = this;
			
			var activeElementID = $(carousel).find('.carousel-indicators').find('.active').attr('data-play');

			// console.log('carousel found: ', carousel.length);
			if(carousel.length < 1) {
				return false;
			}

			$(carousel[0]).find('ol').css({
				display: 'none'
			});

			//	set all elements with class .item to display none
			$(carousel).find( '.' + classNames[1] ).css({
				display: 'none',
			});
			//	--

			//	set element with .active class to display=display
			$($(carousel).find('.item').get(0)).css({
				display:'block'
			});
			//	--
			
			// set element with .active class autoplay="autoplay"
			$($($(carousel).find('.item').get(0)).find('video')).attr('autoplay', 'autoplay');

			// $(carousel).find('.item').find('video').attr('onended', 'Mochi.carousel.next()');
			$.each( $(carousel).find('.item').find('video'), function( _id, _element) {
				$(_element).attr('onended', 'Mochi.carousel.next('+_id+')');
			} );

		};


		var next = function(_previousID) {
			//console.log(_previousID);
			playCount++;

			//console.log($(carousel).find('video'));
			//console.log($(carousel).find('video').get(_previousID));
			//	set previous video to display="none"
			$($(carousel).find('.'+classNames[1]).get(_previousID)).css({
				display:'none'
			});

			// 	set next video to display="display"
			$($(carousel).find('.'+classNames[1]).get(playCount)).css({
				display:'block'
			});

			//	play next video
			$($(carousel).find('.'+classNames[1]).get(playCount)).find('video').get(0).play();

			//console.log('playlist:', this.playlist.length)
			playCount = (playCount === this.playlist.length-1?-1:playCount);
			//console.log('playCount', playCount)
		}

		//	getter
		var set = function(_property, _value) {
			this[_property] = _value;
		}
		//	setter
		var get = function(_property) {
			return this[_property];
		}
		//	--

		init();

		return {
			next: next,
			set: set,
			get: get,
		}

	})();

})(Mochi);