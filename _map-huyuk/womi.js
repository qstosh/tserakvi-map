define([ 'declare', 'reader.api', 'reader.avatar.api', 'require', 'jquery'], function(declare, api, avatar, require, $) {

    function RatioWrapper(item) {
        this._item = $(item).eq(0);
        var wrapper = $($('<div />').css({
            width: '100%',
            position: 'relative'
        }));

        this._item.parent().append(wrapper);
        wrapper.append(this._item);

        this._wrapper = $(this._item).parent();
        $(this._item).css({
            position: 'absolute',
            left: 0,
            right: 0,
            display: 'block',
            width: '100%',
            height: '100%'
        });
    }

    RatioWrapper.prototype.applyRatio = function (ratio) {
        $(this._wrapper).css('padding-bottom', (100 * (1 / ratio)).toFixed(5) + '%');
    };

    return declare({
        instance : {
            iframe : null,
            start : function(placeholder) {
                // Load document
                var readerApi = new api(require);
                var src = readerApi.getFullPath('./index.html');

                this.iframe = $('<iframe src="' + src + '" style="width: 100%; border: none; frameborder: 0; overflow: hidden;" scrolling="no"></iframe></div></div>');

                $(placeholder).append(this.iframe);

                var ratioWrapper = new RatioWrapper($(this.iframe));
                ratioWrapper.applyRatio(16 / 9);

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