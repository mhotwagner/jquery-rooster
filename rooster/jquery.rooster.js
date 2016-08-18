
function hasAttr(o, attr) {
    return $(o).attr(attr) != undefined;
}


(function ( $ ) {
    $.fn.rooster = function(action, options) {
        /****************************************
         * Jquery Rooster!
         * A simple countdown timer.
         *
         * Currently does not accept date time formats
         *
         *****************************************/

        var INTERVAL = 100;

        var el = $(this);

        var defaults = {
            seconds: el.data('rooster-seconds') || 0,
            onComplete: el.data('rooster-oncomplete') || null,
            onStart: el.data('rooster-onstart') || null,
            onStop: el.data('rooster-onstop') || null,
            includeMinutes: hasAttr(el, 'data-rooster-includeminutes') ? el.data('rooster-includeminutes') : true,

            state: el.data('state') || 'idle',
        };

        var opts = $.extend({}, defaults, options);

        var milliseconds = opts.seconds * 1000 + INTERVAL;

        function updateTimer() {
            var displayTime;
            var seconds;
            if (opts.includeMinutes) {
                var minutes = Math.floor((milliseconds / 1000) / 60);
                minutes = minutes.toString();
                while (minutes.length < 2) minutes = '0' + minutes;

                seconds = Math.floor(milliseconds / 1000) % 60;
                seconds = seconds.toString();
                while (seconds.length < 2) seconds = '0' + seconds;

                displayTime = minutes + ':' + seconds;
            } else {
                seconds = Math.floor(milliseconds / 1000);
                seconds = seconds.toString();

                displayTime = seconds;
            }
            el.html(displayTime);
        }

        function clearRoosterTimer() {
            clearInterval(el.data('countdown'));
            el.data('countdown', null);
        }

        function onInterval() {
            milliseconds -= INTERVAL;
            updateTimer();
            if (milliseconds > 0) {
                return;
            }
            clearRoosterTimer();
            if (opts.onComplete) {
                if (typeof(opts.onComplete) == 'string') {
                    eval(opts.onComplete);
                } else if (typeof(opts.onComplete) == 'function') {
                    opts.onComplete();
                }
            }
        }

        switch (action) {
            case 'start':
                // Start the Timer
                el.data('state', 'active');
                el.data('countdown', setInterval(onInterval, INTERVAL));
                return this;
            case 'stop':
                el.data('state', 'idle');
                clearRoosterTimer();
                return this;
            default:
                // Initialize
                updateTimer();
                return this;
        }
    };

}( jQuery ));
