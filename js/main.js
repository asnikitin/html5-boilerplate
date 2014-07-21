//http://dzzzr-vegas.hol.es/
$(document).ready(function() {
    Core.preloader.queue(
        [
            'img/2/baby.jpg',
            'img/2/baby_backside.jpg',
            'img/2/check_mac-cover.jpg',
            'img/2/check_mac.jpg',
            'img/2/condom.png',
            'img/2/condom-cover.png',
            'img/2/credit_card.png',
            'img/2/credit_card-cover.png',
            'img/2/money.png',
            'img/2/money-cover.png',
            'img/2/visit_card-cover.png',
            'img/2/visit-card.png',
            'img/wood2.jpg',
            'img/portmone.png'
        ]).preload(function(ui)
        {
            if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
                $("#SpinContainer").removeClass("spinner");
                $("#MSbug").addClass("in");
            }else{
            $("#SpinContainer").removeClass("spinner");
            $("#MainContainer").addClass("in");
            $("#helpModal").modal();
            }
        });
    var isRotate_photo=1;
    var isRotate_condom=1;
    var isRotate_visit=1;
    var isRotate_money=1;
    var isRotate_credit=1;
    var isRotate_check=1;
    $("#fssAction-photo").click(function() {
        if(isRotate_photo) {
            if($('html').hasClass('gte-ie9')) {$("#myid-photo").css("visibility","hidden");}else{
                $("#card-rot-photo").addClass('card-rotate');}
            isRotate_photo--;
        }else{
            if($('html').hasClass('gte-ie9')) {$("#myid-photo").css("visibility","visible");}else{
                $("#card-rot-photo").removeClass('card-rotate');}
            isRotate_photo++;
        }
    });
    $("#fssAction-condom").click(function() {
        if(isRotate_condom) {
            if($('html').hasClass('gte-ie9')) {$("#myid-condom").css("visibility","hidden");}else{
                $("#card-rot-condom").addClass('card-rotate');}
            isRotate_condom--;
        }else{
            if($('html').hasClass('gte-ie9')) {$("#myid-condom").css("visibility","visible");}else{
                $("#card-rot-condom").removeClass('card-rotate');}
            isRotate_condom++;
        }
    });
    $("#fssAction-money").click(function() {
        if(isRotate_money) {
            if($('html').hasClass('gte-ie9')) {$("#myid-money").css("visibility","hidden");}else{
                $("#card-rot-money").addClass('card-rotate');}
            isRotate_money--;
        }else{
            if($('html').hasClass('gte-ie9')) {$("#myid-money").css("visibility","visible");}else{
                $("#card-rot-money").removeClass('card-rotate');}
            isRotate_money++;
        }
    });
    $("#fssAction-visit").click(function() {
        if(isRotate_visit) {
            if($('html').hasClass('gte-ie9')) {$("#myid-visit").css("visibility","hidden");}else{
                $("#card-rot-visit").addClass('card-rotate');}
            isRotate_visit--;
        }else{
            if($('html').hasClass('gte-ie9')) {$("#myid-visit").css("visibility","visible");}else{
                $("#card-rot-visit").removeClass('card-rotate');}
            isRotate_visit++;
        }
    });
    $("#fssAction-credit").click(function() {
        if(isRotate_credit) {
            if($('html').hasClass('gte-ie9')) {$("#myid-credit").css("visibility","hidden");}else{
                $("#card-rot-credit").addClass('card-rotate');}
            isRotate_credit--;
        }else{
            if($('html').hasClass('gte-ie9')) {$("#myid-credit").css("visibility","visible");}else{
                $("#card-rot-credit").removeClass('card-rotate');}
            isRotate_credit++;
        }
    });
    $("#fssAction-check").click(function() {
        if(isRotate_check) {
            if($('html').hasClass('gte-ie9')) {$("#myid-check").css("visibility","hidden");}else{
                $("#card-rot-check").addClass('card-rotate');}
            isRotate_check--;
        }else{
            if($('html').hasClass('gte-ie9')) {$("#myid-check").css("visibility","visible");}else{
                $("#card-rot-check").removeClass('card-rotate');}
            isRotate_check++;
        }
    });
});