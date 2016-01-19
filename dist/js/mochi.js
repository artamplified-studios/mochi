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
		description: 'Named after my fluffy cat Mochi, a collection of usefull components'
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
/*
*	video carousel plugin for Mochi
*/

(function( _mochi ) {
	//console.log( _mochi );

	if(typeof(jQuery) === 'undefined') {
		return false;
	}

	_mochi.carousel = (function() {

		this.classNames = ['video-carousel', 'item'];
		this.attributesNames = ['display'];

		this.id = 0;
		this.element = '';

		this.settings = {};

		

		this.init = function() {
			var self = this;	

			this.settings = {
				id: 				this.id,
				element: 			$(this.element).get(this.id),
				activeElement: 		$(this.element).find('.carousel-indicators').find('.active'),
				activeElementID: 	$($(this.element).find('.carousel-indicators').find('.active')).attr('data-play'),
				playCount: 			0,
			}

			//	set all list elements to display="none"
			$(this.settings.element).find('ol').css({
				display:'none'
			});
			//	--

			//	set all list elements to display="none"
			$(this.settings.element).find('.item').css({
				display:'none'
			});
			//	--

			//	set active item to display="block"
			$($(this.settings.element).find('.item').get(this.settings.activeElementID)).css({
				display: 'block'
			});

			//	play active video
			$($($(this.settings.element).find('.item').get(this.settings.activeElementID))).find('video').get(0).play();

			//	on video ended
			//	play next video and pass previous video id
			$.each($(this.settings.element).find('video'), function(_index, _element) {
				$(_element).attr('onended', 'Mochi.carousel.next('+_index+','+self.settings.id+')');
			});

		};

		this.next = function(_previousID, _carouselID) {
			//console.log(_previousID, '_carouselID: ', _carouselID);
			var previousID = _previousID;
			
			var settings = _mochi.list[_carouselID].settings;
				settings.previousID = _previousID;
				settings.playCount = ((_previousID++) === ($(settings.element).find('li').length)-1)?0:_previousID++;
				console.log(previousID);

			$($(settings.element).find('.item').get(previousID)).css({
				display:'none'
			});

			// 	set next video to display="display"
			$($(settings.element).find('.item').get(settings.playCount)).css({
				display:'block'
			});

			//	play next video
			$($($(settings.element).find('.item').get(settings.playCount)).find('video')).get(0).play();

			// //console.log('playlist:', this.playlist.length)
			//settings.playCount = (settings.playCount === ($(settings.element).find('li').length)-1?-1:settings.playCount);
			//console.log('playCount', playCount)
		}

		return {
			settings: this.settings,
			init: this.init,
			next: this.next,
		}

	})();

	var instance = [];

	$.each($('.video-carousel'), function(_index, _element) {

		var element = Object.create(_mochi.carousel, {
			id: {value:_index},
			element: {value: _element}
		});

		_mochi.list.push(element);

		element.init();
		element.list = instance;

		

	});

	//console.log(instance[0]);

})(Mochi);