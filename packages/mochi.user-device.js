/*
*	user-device plugin for muchi
*	--
*/

(function( _mochi ) {


	_mochi.isIphone = function() {
		var match = new RegExp(/iphone/gi);

		console.log(navigator.userAgent);
		return match.test(navigator.userAgent);
	}

	_mochi.isIpad = function() {
		var match = new RegExp(/ipad/gi);

		console.log(navigator.userAgent);
		return match.test(navigator.userAgent);
	}

	_mochi.userAgent = function() {
		return navigator.userAgent;
	}

	_mochi.isMobile = function() {
		var match = new RegExp(/mobile/gi);

		console.log(navigator.userAgent);
		return match.test(navigator.userAgent);
	}


})(Mochi);