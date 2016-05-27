


(function ( $ ) {

    $.fn.rooster = function() {
        alert('rooster, baby!');
        return this.each(function() {
            alert('roostering ' + this);
        });
    };

}( jQuery ));