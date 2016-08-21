(function($) {

	gamePrototype = function() {
		this.preload = null;
		this.soundInstance = null;
		this.soundId = '';
	};

	gamePrototype.prototype.init = function() {
		console.warn('Default init method triggered');
	}

	gamePrototype.prototype.load = function(api) {
		console.warn('Default load method triggered');
	}
	
	gamePrototype.prototype.initDOM = function() {
		console.warn('Default initDOM method triggered');
	}

	gamePrototype.prototype.setPreload = function(preload) {
		this.preload = preload;
	}

	gamePrototype.prototype.getPreload = function() {
		return this.preload;
	}

	gamePrototype.prototype.setSoundInstance = function(soundInstance) {
		this.soundInstance = soundInstance;
	}

	gamePrototype.prototype.getSoundInstance = function() {
		return this.soundInstance;
	}

	gamePrototype.prototype.soundPlay = function(soundId) {

		if (soundId === undefined && this.soundInstance) {
			if (this.soundInstance.getPosition() == 0)
				this.soundInstance.play();
			else
				this.soundInstance.resume();

		} else {
			if (soundId) {
				this.soundId = soundId;
				if (this.soundInstance) {
					this.soundInstance.stop();
					this.soundInstance.removeAllEventListeners();
					this.soundInstance = null;
				}
				this.soundInstance = createjs.Sound.play(soundId);

				var _this = this;
				this.soundInstance.addEventListener("complete", function() {
					var soundCtrl = $('.button-sound');
					soundCtrl.removeClass('paused').removeClass('playing').html('<span class="icon icon-replay"></span>');

					_this.soundInstance.setPosition(0);
				});
			}
		}

	}

	gamePrototype.prototype.soundPause = function() {
		if (this.soundInstance) {
			this.soundInstance.pause();
		}
	}

	gamePrototype.prototype.soundRestart = function() {
		if (this.soundInstance) {
			this.soundInstance.setPosition(0);
			this.soundInstance.play();
		}
	}

	gamePrototype.prototype.prepare = function(gameData, container) {
		gamePrototype.prototype.initDOM();
		var mainImg = $('.main-image');

		this.preload = new createjs.LoadQueue(false);
		this.preload.installPlugin(createjs.Sound);

		if (typeof (gameData.resources) == 'object' && gameData.resources.length) {

			if (!createjs.Sound.initializeDefaultPlugins()) {
				return false;
			}

			var preload = this.preload;
			this.preload.addEventListener("complete", function() {
				gamePrototype.prototype.onComplete(gameData, preload);
				gamePrototype.prototype.prepareGame(gameData, container, preload);
			});

			$.each(gameData.resources, function(idx, resource) {
				if (resource.id == 'SND_lektor') {
					// gameData.resources[idx].src+='.ogg';
				}
			});
			// createjs.Sound.alternateExtensions = ["mp4","mp3"];
			this.preload.loadManifest(gameData.resources);

		} else {
			gamePrototype.prototype.prepareGame(gameData, container);

			$('.button-sound').remove();

			$('.loading').remove();

			if ((gameData.video === undefined && typeof (gameData.video) !== 'object')) {

				if (mainImg.length) {
					if (mainImg.prev().hasClass('spacer')) {
						mainImg.prev().remove();
					}
					$('.main-image').remove();
				}
			}
		}

		/**
		 * @deprecated Sprawdzić czy jest gdzieś używane. Jak nie to wywalić
		 */
		if (gameData.video !== undefined && typeof (gameData.video) == 'object') {

			var sources = gameData.video.sources;

			var videoEl = $('<video controls class="video"></video');

			$.each(gameData.video.sources, function(idx, source) {
				var ext = source.split('.').pop().toLowerCase();
				videoEl.append('<source src="' + source + '" type="video/' + ext + '">');
			});

			var videoContainer = $('<div class="video-container"></div>');
			videoContainer.append(videoEl);
			mainImg.append(videoContainer);

			// napisy do filmu
			console.log(gameData.video.subtitles);
			if (gameData.video.subtitles !== undefined && typeof (gameData.video.subtitles) == 'object') {

				var subtitleEl = $('<div class="subtitles"></div>');
				videoContainer.append(subtitleEl);

				$.each(gameData.video.subtitles, function(idx, subtitle) {
					subtitleEl.append('<div class="subtitle" data-start_time="' + subtitle.start_time + '" data-end_time="' + subtitle.end_time + '">' + subtitle.text + '</div>');
				});

				var subtitles = $('.subtitle', subtitleEl);

				videoEl.on("play", function(e) {

				}).on("pause", function(e) {

				}).on("timeupdate", function(e) {

					var time = this.currentTime;

					subtitles.each(function(idx, subtitle) {

						subtitle = $(subtitle);

						var start_time = parseFloat(subtitle.data('start_time'));
						var end_time = parseFloat(subtitle.data('end_time'));

						if (start_time < time) {
							subtitle.addClass('active');
						} else {
							subtitle.removeClass('active');
						}
					});

					var subtitlesActive = $('.subtitle.active', subtitleEl);
					var count = subtitlesActive.length * 1.5;

					subtitlesActive.each(function(idx, subtitle) {
						// $(subtitle).css('color','rgba(0,0,0,'+alpha+')');
						// alpha-=0.3;

						$(subtitle).css('bottom', count + 'em');
						count -= 1.5;
					});

					var alpha = 1;
					subtitlesActive.reverse().each(function(idx, subtitle) {
						$(subtitle).css('color', 'rgba(0,0,0,' + alpha + ')');
						if (alpha < 0)
							alpha = 0;
						else
							alpha -= 0.35;

					});

				});

			}

		}
		$(window).trigger('resize');
		
		var _updateTimeout;
		$('body').on('DOMSubtreeModified', function() {
			clearTimeout(_updateTimeout)
			_updateTimeout = setTimeout(function() {
				if (api) {
					api.updateContainerSize($('body').height() + 10);
				} else {
					try {
						$(window.frameElement).height($('body').outerHeight() + 10);
					} catch(e) {
						
					}
				}
			}, 100);
		});
		
		$(window).on('resize', function() {
			clearTimeout(_updateTimeout)
			_updateTimeout = setTimeout(function() {
				if (api) {
					api.updateContainerSize($('body').height() + 10);
				} else {
					try {
						$(window.frameElement).height($('body').outerHeight() + 10);
					} catch(e) {
						
					}
				}
			}, 100);
		});

		$('body').trigger('DOMSubtreeModified');
	}

	gamePrototype.prototype.prepareGame = function(gameData, container) {

		if (gameData.title) {
			$('title').text(gameData.title);
		} else {
			$('title').text('Brak tytułu');
		}

		var header = $('.header-question-text');

		if (gameData.game_title) {
			header.append('<h1>' + gameData.game_title + '</h1>');
		}

		if (gameData.game_subtitle) {
			header.append('<h2>' + gameData.game_subtitle + '</h2>');
		}

		var game = $.gamesRegistry('create', gameData.type).init(gameData, container);
		$.gamesRegistry('provideApi');
		$(window).trigger('resize');

		$('input[type=text]').val('');

        return game;
	};

	gamePrototype.prototype.startSound = function() {

		if (gameData.start_sound !== undefined && gameData.start_sound.length) {
			$.gamesRegistry.soundPlay(gameData.start_sound);

			$('.button-sound').addClass('playing');
			$('.button-sound').html('<span class="icon icon-sound-on"></span>');

		} else {
			$('.button-sound').remove();
		}
	};

	gamePrototype.prototype.onComplete = function(gameData, preload) {

		$('.button-sound').click(function() {
			var _this = $(this);

			if (_this.hasClass('playing')) {

				$.gamesRegistry.soundPause();
				_this.removeClass('playing').addClass('paused');
				_this.html('<span class="icon icon-sound-off"></span>');

			} else if (_this.hasClass('paused')) {

				$.gamesRegistry.soundPlay();
				_this.removeClass('paused').addClass('playing');
				_this.html('<span class="icon icon-sound-on"></span>');

			} else {

				$.gamesRegistry.soundPlay();
				_this.removeClass('paused').addClass('playing');
				_this.html('<span class="icon icon-sound-on"></span>');

			}
		});

//		if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
//			$('.loading').attr('data-text', 'Kliknij, aby rozpocząć').bind('click', function() {
//				$(this).remove();
//				startSound();
//			});
//		} else {
			$('.loading').remove();
			startSound();
//		}

		function startSound() {
			if (gameData.start_sound !== undefined && gameData.start_sound.length) {
				$.gamesRegistry.soundPlay(gameData.start_sound);

				$('.button-sound').addClass('playing');
				$('.button-sound').html('<span class="icon icon-sound-on"></span>');

			} else {
				$('.button-sound').remove();
			}
		}

		var backgroundImage = preload.getResult('IMG_main');

		if (backgroundImage) {

			var src = '';

			if (backgroundImage.src) {
				src = backgroundImage.src;
			} else if (backgroundImage.data) {
				src = backgroundImage.data;
			}

			// jeżeli SVG - start
			var imageContainer = $('<div class="image-buffor-cointainer">');
			imageContainer.css({
				'width' : '0',
				'height' : '0',
				'overflow' : 'hidden',
			});

			var width, height;

			var imageObject = $(backgroundImage);
			imageContainer.append(imageObject);
			$('body').append(imageContainer);

			//--! This needs a redo
//			backgroundImage.addEventListener("load", function() {
//				var svgDoc = $(backgroundImage.contentDocument);
//				width = parseInt(svgDoc.find('svg').attr('width'));
//				height = parseInt(svgDoc.find('svg').attr('height'));
//
//				console.log('svg', width, height);
//				PROPORTIONS_IMAGE = width / height;
//				$(window).trigger('resize');
//			}, false);
/*			var imageListener = new Image();
				imageListener.onload = function() {
					width = this.width;
					height = this.height;
					PROPORTIONS_IMAGE = width / height;
					$(window).trigger('resize');
				}
			imageListener.src = src;
*/			
			// jeżeli SVG - koniec

			if (backgroundImage.width) {
				PROPORTIONS_IMAGE = backgroundImage.width / backgroundImage.height;
			} else {
				$.each(gameData.resources, function(idx, resource) {
					if (resource.id == 'IMG_main') {
						if (resource.width && resource.height) {
							PROPORTIONS_IMAGE = resource.width / resource.height;
							$('.main-image').attr('data-width', resource.width);
							$('.main-image').attr('data-height', resource.height);
							console.log(resource.width);
						}
					}

				});

			}

			$('.main-image').css('background-image', 'url("' + src + '")');

			//$(window).resize(function() {
			//	var width = $('.main-image').width();
			//	$('.content').height(width / PROPORTIONS_IMAGE);
			//});

		} else {
			var mainImg = $('.main-image');
			if (mainImg.length) {
				if (mainImg.prev().hasClass('spacer')) {
					mainImg.prev().remove();
				}
				$('.main-image').remove();
			}
		}
	};

	var games = {}, api;

	var methods = {
		api : null,
		register : function(name, constructor) {
			if (methods.hasOwnProperty(name)) {
				console.warn("Game plugin " + name + " is already registered");
				return false;
			}
//			if (typeof (constructor) != 'object') {
//				console.warn("Game plugin " + name + " is not valid object");
//				return false;
//			}
			
			games[name] = constructor;
			games[name].prototype = $.extend(true, constructor.prototype, gamePrototype.prototype);
		},
		create : function(name) {
			if (!games.hasOwnProperty(name)) {
				console.warn("Game plugin " + name + " not exist");
				return false;
			}
			return new games[name]();
		},
		setApi : function(_api) {
			console.info("API successfully provided!");
			api = _api;
			methods.provideApi();
			$('body').trigger('DOMSubtreeModified');
		},
		provideApi : function() {
			$.each(games, function(index) {
				try {
					this.load();
				} catch (e) {
				}
			});
		},
		setUserVariable : function(name, value) {
			if (!api) {
				return null;
			}
			return api.setLocalUserVar(name, JSON.stringify(value));
		},
		getUserVariable : function(name) {
			if (!api) {
				return null;
			}
			try {
				return JSON.parse(api.getLocalUserVar(name));
			} catch (e) {
				return null;
			}
		}
	};

	$.gamesRegistry = function(method) {

		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.gamePrototype');
		}
		return this;
	};

	$.gamesRegistry.prepare = gamePrototype.prototype.prepare;

	$.gamesRegistry.getPreload = gamePrototype.prototype.getPreload;
	$.gamesRegistry.getSoundInstance = gamePrototype.prototype.getSoundInstance;
	$.gamesRegistry.soundPlay = gamePrototype.prototype.soundPlay;
	$.gamesRegistry.soundPause = gamePrototype.prototype.soundPause;
	$.gamesRegistry.soundRestart = gamePrototype.prototype.soundRestart;

	$.gamesRegistry.getHeaderElem = function() {
		return $('.header-question div:first-child');
	};

	$.gamesRegistry.getCheckAnswersElem = function() {
		return $($.gamesRegistry.getHeaderElem())
		return $('.show-correct');
	};

	$.gamesRegistry.createQuestionText = function(options) {
		var header = $.gamesRegistry.getHeaderElem();
		if (options.question) {
			header.append('<h1>' + options.question + '</h1>')
		}
		if (options.subquestion) {
			header.append('<h2>' + options.question + '</h2>')
		}
	}

	$.gamesRegistry.shuffleContainerElements = function(parent, children) {

		children.detach().sort(function(a, b) {
			var r = 0.5 - Math.random();

			return r;
		});

		if (parent.length > 1) {

			parent.each(function(idx, _parent) {
				$(_parent).append(children[idx]);
			});

		} else {
			parent.append(children);
		}
	}

	$.gamesRegistry.toggleButtonText = function(_this) {

		$(_this).toggleClass('selected');

		var text1 = $(_this).data('text');
		var text2 = $(_this).html();

		$(_this).html(text1);
		$(_this).data('text', text2);
	}

})(jQuery);

/**
 * Klasa która ma za zadanie ujednolicić parsowanie struktur opisujących
 * obszary.
 */

absoluteArea = function(_options) {
	this.options = {
		width : Infinity,
		height : Infinity,
		x : 0,
		y : 0,
		radius : 0,
	};
	$.extend(this.options, _options);
};

absoluteArea.prototype.applyAt = function(htmlObject, _containerOptions) {
	var containerOptions = {
		view_width : Infinity,
		view_height : Infinity,
	}
	$.extend(containerOptions, _containerOptions);

	// Wysokość
	if (this.options.width !== undefined && this.options.width != Infinity)
		$(htmlObject).css('width', 100 * this.options.width / containerOptions.view_width + '%');

	if (this.options.height !== undefined && this.options.height != Infinity)
		$(htmlObject).css('height', 100 * this.options.height / containerOptions.view_height + '%');

	// Pozycja
	if (this.options.x != Infinity) {
		$(htmlObject).css({
			left : 100 * this.options.x / containerOptions.view_width + '%'
		});
	}
	if (this.options.y != Infinity) {
		$(htmlObject).css({
			top : 100 * this.options.y / containerOptions.view_height + '%'
		});
	}
};

showFeedback = function(titleText, contentText) {
	var background = $('<div class="background">');
	$('body').append(background);

	var window = $('<div class="window">');
	var windowFrame = $('<div class="window-frame">');
	var title = $('<div class="window-title">');
	var close = $('<div class="button button-window">OK</div>');
	var content = $('<div class="window-content">');

	title.html(titleText);
	content.html(contentText).append(close);

	close.bind('click', function() {
		background.remove();
		window.remove();
	});

	windowFrame.append(title).append(content);
	window.append(windowFrame);

	$('body').append(window);
};

// $('document').ready(function() {
// document.ontouchmove = function(event) {
// event.preventDefault();
// };
// });
