var BASEFONT = 14; // Czcionka przy szerokości 800px
var PROPORTIONS = 16 / 9; // AspectRatio
var PROPORTIONS_IMAGE = 16/9;
Events = {};

//jQuery.fn.reverse = [].reverse;

$(document).ready(function() {
//    // window resize
//    function changeWindowSizeEvent() {
//		var width, height;
//	
//		$('#inner-container').width(0);
//		$('#inner-container').height(0);
//	
//		height = $('body').height();
//		width = height * PROPORTIONS;
//	
//		if (width > $('body').width()) {
//		    width = $('body').width();
//		    height = width / PROPORTIONS;
//		}
//	
//	
//		$('body').css('font-size', BASEFONT * width / 800 + 'px');
//	
//		if ($('#main-body').length) {
//		    height = $('#main-body').height();
//		    width = height * PROPORTIONS_IMAGE;
//	
//		    if (width > $('#main-body').width()) {
//		    	width = $('#main-body').width();
//		    	height = width / PROPORTIONS_IMAGE;
//		    }
//	
//	
//		    $('#inner-container').width(width);
//		    $('#inner-container').height(height);
//	
//		    var _BASEFONT = BASEFONT * 0.8;
//		    
//		    $('#main-body').css('font-size', _BASEFONT * width / 800 + 'px');
//		}
//		/*
//		var video = $('.video-container video.video');
//		if (video.length){
//			var videoHeight=video.innerHeight();
//			var containerHeight=video.parent().parent().innerHeight();
//			
//			var subtitlesHeight = containerHeight-videoHeight;
//			
//			$('.video-container .subtitles').css('height',subtitlesHeight+'px');
//			
//		}
//*/
//    }
//    
//    $(window).resize(changeWindowSizeEvent);
//    //changeWindowSizeEvent();
//
//
//    // button events
//    (function() {
//	$(document).on('mousedown touchstart', '.button', function() {
//	    $(this).addClass('active');
//	}).on('mouseup touchend touchcancel', '.button', function() {
//	    $(this).removeClass('active');
//	});
//	if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
//	    $(document).on('mouseenter', '.button', function() {
//		$(this).addClass('hover');
//	    }).on('mouseleave', '.button', function() {
//		$(this).removeClass('hover');
//	    });
//	}
//
//    })();


});