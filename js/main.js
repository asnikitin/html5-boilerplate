jQuery.fn.fadePhotos = function(options) {
    return this.each(function(){
        settings=jQuery.extend({
            speed: 'slow', // default animation transition speed
            interval: 3000, // default interval between image change
            ActionElement: 'fssAction'
        }, options);
    });

    // count number of Photos
    var Photos = jQuery('> *', this).length;
    Photos = Photos - 1;


}