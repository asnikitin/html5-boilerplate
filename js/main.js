/*
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
    */

$(document).ready(function() {
    var isRotate=1;
    $("#fssAction").click(function() {
        if(isRotate) {
	        if($('html').hasClass('gte-ie9')) {$("#myid").css("visibility","hidden");}else{
            $("#card-rot").addClass('card-rotate');}
            isRotate--;
        }else{
            if($('html').hasClass('gte-ie9')) {$("#myid").css("visibility","visible");}else{
            $("#card-rot").removeClass('card-rotate');}
            isRotate++;
        }
    });
});