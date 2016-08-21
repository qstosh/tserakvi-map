(function($) {

	$.gamesRegistry('register', 'q12-pairs_img', function() {

		var options = {};
		
		this.load = function () {
			var context = this;
			var savedData = $.gamesRegistry('getUserVariable', 'answer');
			if (!savedData) {
				return null;
			}
			
			$('.pair').each(function(index, value) {
				var dragEl = $('.pair').find('.bottom[data-saveid="' + savedData[index][0] + '"]');
				var imgEl = $('.pair').find('.top[data-saveid="' + savedData[index][1] + '"]');
				
				$(value).droppable("destroy");
				dragEl.draggable("destroy");
				
				imgEl.data('id', index);
				dragEl.data('id', index);
				
				imgEl.appendTo(value);
				dragEl.appendTo(value);
			});
			context.makeDraggableLikeList($('.main.row-content.middle'));
		};
		
		this.save = function () {
			var selectedAnswers = [];
			$('.pair').each(function(index, value) {
				var dragId = $(value).find('.bottom').data('saveid');
				var imgId = $(value).find('.top').data('saveid');
				selectedAnswers.push([dragId, imgId]);
			});
			$.gamesRegistry('setUserVariable', 'answer', selectedAnswers);
		};
		
		this.makeDraggable = function(obj) {
			obj.draggable({
				axis : 'x',
				revert : true,
				appendTo : 'body',
				containment : $('.inner-panel')
			});
		}

		this.makeDraggableLikeList = function(slideObj, rebindPreviewimage) {
			var context = this;
			$.each(slideObj.find('.bottom'), function() {
				context.makeDraggable($(this));
			});

			slideObj.find('.pair').droppable({
				drop : function(event, ui) {
					var id = ui.draggable.data('id');
					var thisId = $(this).attr('id').replace('pair', '');

					var container = $(this).parent();

					var drag_item = ui.draggable;

					if (thisId != id) {

						var elem = $(this).children('.bottom').clone();
						$(this).children('.bottom').remove();

						var pair = container.find('#pair' + id);
						elem.removeAttr('data-id');
						elem.attr('data-id', id);
						context.makeDraggable(elem);

						pair.append(elem);
						var clone = ui.draggable.clone();
						$(this).append(clone);

						clone.removeAttr('style');
						clone.css('position', 'relative');
						clone.removeAttr('data-id');
						clone.attr('data-id', thisId);

						setTimeout(function() {
							clone.removeClass('ui-draggable-dragging');
						}, 100);

						context.makeDraggable(clone);

						ui.draggable.remove();

						drag_item = clone;
					}

					$(this).removeClass('active');

					drag_item.removeAttr('style').css('position', 'relative').addClass('blink').unbind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
						$(this).removeClass('blink');
					});
					context.save();
				},
				over : function() {
					$(this).addClass('active');
				},
				out : function() {
					$(this).removeClass('active');
				}
			});
		}
		
		this.init = function(data, container) {
			$('body').addClass('Q12PairsImg');
			var context = this;
			$.extend(options, data);

			options.pair_images = [];
			options.pair_texts = [];

			$.each(options.items, function(idx, item) {
				options.pair_images.push({
					id : idx,
					image : item.image
				});
				options.pair_texts.push({
					id : idx,
					text : item.text
				});
			});

			function shuffleArray() {

				$.each(options.pair_texts, function(idx, item) {
					if (options.pair_images[idx].id == item.id) {
						shuffle(options.pair_texts);
						shuffle(options.pair_images);
						shuffleArray();
						return;
					}
				});
			}

			shuffleArray();

			var width = 100 / options.items.length;

			var preload = $.gamesRegistry.getPreload();

			function getByInsideId(array, id) {
				for (var i = 0; i < array.length; i++) {
					if (array[i].id == id) {
						return array[i].text;
					}
				}
			}

			$.each(options.pair_images, function(idx, item) {

				var image = preload.getResult(item.image);

				var text_item = options.pair_texts[idx];
				var correctText = getByInsideId(options.pair_texts, item.id);

				var src = $(image).attr('src');
				if (src == undefined) {
					src = $(image).attr('data');
				}

				var el = $('<div class="pair" id="pair' + idx + '" style="width:' + width + '%">' + '<img class="top" style="width: 100%;" src="' + src + '" data-id="' + idx + '" data-pair_id="' + item.id + '" data-saveid="' + item.id + '" data-text="' + correctText + '">' + '<div data-id="' + idx + '" data-pair_id="' + text_item.id + '" data-saveid="' + text_item.id + '" class="sortable-item bottom border-color" data-text="' + text_item.text + '">' + text_item.text + '<div class="icon icon-move-x"></div></div></div>');

				$('.game-panel').append(el);
			});

			function checkCorrect(showCorrect) {

				var correct = true;

				$('.pair').each(function(idx, item) {

					var top = parseInt($('.top', item).data('pair_id'), 10);
					var bottom = parseInt($('.bottom', item).data('pair_id'), 10);

					if (top != bottom) {
						if (!showCorrect) {
							$(this).find('.icon').removeClass('icon-move-x').addClass('icon-fail');
							correct = false;
						} else {
							var bottomEl = $('.bottom', item)
							bottomEl.text(options.items[top].text);
						}

					} else {
						if (!showCorrect)
							$(this).find('.icon').removeClass('icon-move-x').addClass('icon-ok');
					}
				});

				if (correct && options.feedback.title) {
					showFeedback(options.feedback.title, options.feedback.content);
				}

				/*
				 * if (!showCorrect && !showCorrect) { if (correct == false) {
				 * $('.footer-container').addClass('incorrect'); } else {
				 * $('.footer-container').addClass('correct'); } }
				 */
			}

			function checkCorrect1() {

				$('.pair').each(function(idx, item) {

					var parent = parseInt($(item).attr('id').replace('pair', ''), 10);
					var bottom = parseInt($('.bottom', item).data('pair_id'), 10);

					if (parent != bottom) {
						$(this).addClass('incorrect');
					} else {
						$(this).addClass('correct');
					}
				});
			}

			context.makeDraggableLikeList($('.main.middle'));

			$('.check-correct').click(function() {

				if ($(this).hasClass('disabled'))
					return;
				$('.show-correct').toggleClass('disabled');
				$.gamesRegistry.toggleButtonText(this);

				if ($(this).hasClass('selected')) {
					$(".ui-draggable").draggable("disable");
					$('.pair .bottom').removeClass('blink');
					checkCorrect();
				} else {
					$(".ui-draggable").draggable("enable");
					$('.pair .icon').removeClass('icon-ok').removeClass('icon-fail').addClass('icon-move-x');
					// $('.footer-container').removeClass('incorrect').removeClass('correct');
				}
			});

			var currentState = [];

			$('.show-correct').click(function() {

				if ($(this).hasClass('disabled'))
					return;
				$('.check-correct').toggleClass('disabled');
				$.gamesRegistry.toggleButtonText(this);

				$('.pair').removeClass('correct').removeClass('incorrect');

				if ($(this).hasClass('selected')) {
					$(".ui-draggable").draggable("disable");

					$('.pair .bottom').each(function(idx, item) {
						currentState[idx] = $(item).html();

						var text = $(this).parent().children('.top').data('text');
						$(item).text(text);

					});

					// checkCorrect(true);
				} else {
					$('.pair .bottom').each(function(idx, item) {
						$(item).html(currentState[idx]);
					});
					$(".ui-draggable").draggable("enable");
				}
			});
		}
	});
})(jQuery);