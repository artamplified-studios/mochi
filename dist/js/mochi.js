var Mochi = (function() {
	this.version = '0.1.0';
	this.author = 'Kiran Mertopawiro';
	this.description = "Named after my fluffy cat Mochi, a collection of usefull components";



	return {
		version: 		this.version,
		author: 		this.author,
		description: 	this.description
	}
})();
/*
*	video carousel plugin for Mochi
*/

(function( _mochi ) {
	//console.log( _mochi );
	_mochi.carousel = {

		classNames: ['video-carousel'],
		attributesNames: [''],
		playlist: [],

		next: function(_previousID) {

		}
	}

})(Mochi);