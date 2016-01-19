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
			console.log(_previousID, '_carouselID: ', _carouselID);
			
			var settings = _mochi.list[_carouselID].settings;
				settings.playCount++;

			$($(settings.element).find('.item').get(_previousID)).css({
				display:'none'
			});


			// // 	set next video to display="display"
			$($(settings.element).find('.item').get(settings.playCount)).css({
				display:'block'
			});

			
			//	play next video
			//console.log($($(settings.element).find('.item').get(settings.playCount)).find('video').get(0))
			$($($(settings.element).find('.item').get(settings.playCount)).find('video')).get(0).play();

			// //console.log('playlist:', this.playlist.length)
			settings.playCount = (settings.playCount === ($(settings.element).find('li').length)-1?-1:settings.playCount);
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