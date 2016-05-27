


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
            onStop: el.data('rooster-onstop') || null
        };

        var opts = $.extend({}, defaults, options);

        var ms = opts.seconds * 1000;


        function updateTimer() {
            var minutes = Math.floor((ms/1000)/60);
            minutes = minutes.toString();
            while (minutes.length < 2) minutes = '0' + minutes;

            var seconds = Math.floor(ms/1000) % 60;
            seconds = seconds.toString();
            while (seconds.length < 2) seconds = '0' + seconds;

            var displayTime = minutes + ':' + seconds;

            el.html(displayTime);
        }

        var onInterval = function() {
            ms -= INTERVAL;
            updateTimer();
            if (ms > 0) {
                return;
            }
            clearInterval(el.countdown);
            if (opts.onComplete) {
                eval(opts.onComplete);
            }
        };

        switch (action) {
            case 'start':
                // Start the Timer
                el.countdown = setInterval(onInterval, INTERVAL);
                return this;
            default:
                // Initialize
                updateTimer();
                return this;
        }
    };

}( jQuery ));