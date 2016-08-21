define([ 'declare', 'reader.api', 'reader.avatar.api', 'require', 'jquery'], function(declare, api, avatar, require, $) {
	return declare({
		instance : {
			iframe : null,
			start : function(placeholder) {
				// Load document
				var readerApi = new api(require);
				var src = readerApi.getFullPath('./index.html');

				this.iframe = $('<iframe src="' + src + '" style="width: 100%; border: none; frameborder: 0; overflow: hidden;" scrolling="no"></iframe></div></div>');
				$(placeholder).append(this.iframe);
				var context = this;
				// Init API
				$(this.iframe).load(function() {
					try {
						this.contentWindow.$.gamesRegistry('setApi', $.extend({
							updateContainerSize : function(height) {
								context.updateSize(height);
							}
						}, readerApi));
					} catch (v) {
						console.warn('Game does not support API : ' + v);
					}
				});
			},
			sizeChange : function() {
				this.updateSize();
			},
			updateSize : function(height) {
				if (!this.iframe)
					return;

				this.height = height;

				this.iframe.css({
					height : this.height
				});
			}
		}
	});
});