// Program
    $(document).ready(function ($) {
        $('#lightbox').hide();
        $('.prog').click(function (e) {
            e.preventDefault();
            $('#lightbox').show();
        });
        $('#lightbox').click(function () {
            $('#lightbox').hide();
        });
    });

    // Display Bio
    $('#ms1').click(function() {
        if ($('#bio1').is(':hidden')){
            $('.bio').slideUp("fast");
            $('#bio1').slideDown("fast");
        }
        else { $('#bio1').slideUp("fast");}
    });
    $('#ms2').click(function() {
        if ($('#bio2').is(':hidden')){
            $('.bio').slideUp("fast");
            $('#bio2').slideDown("fast");
        }
        else { $('#bio2').slideUp("fast");}
    });
    $('#ms3').click(function() {
        if ($('#bio3').is(':hidden')){
            $('.bio').slideUp("fast");
            $('#bio3').slideDown("fast");
        }
        else { $('#bio3').slideUp("fast");}
    });
    $('#ms4').click(function() {
        if ($('#bio4').is(':hidden')){
            $('.bio').slideUp("fast");
            $('#bio4').slideDown("fast");
        }
        else { $('#bio4').slideUp("fast");}
    });
    $('#ms5').click(function() {
        if ($('#bio5').is(':hidden')){
            $('.bio').slideUp("fast");
            $('#bio5').slideDown("fast");
        }
        else { $('#bio5').slideUp("fast");}
    });
    $('#ms6').click(function() {
        if ($('#bio6').is(':hidden')){
            $('.bio').slideUp("fast");
            $('#bio6').slideDown("fast");
        }
        else { $('#bio6').slideUp("fast");}
    });
    $('#ms7').click(function() {
        if ($('#bio7').is(':hidden')){
            $('.bio').slideUp("fast");
            $('#bio7').slideDown("fast");
        }
        else { $('#bio7').slideUp("fast");}
    });
    $('#ms8').click(function() {
        if ($('#bio8').is(':hidden')){
            $('.bio').slideUp("fast");
            $('#bio8').slideDown("fast");
        }
        else { $('#bio8').slideUp("fast");}
    });
    $('#ms9').click(function() {
        if ($('#bio9').is(':hidden')){
            $('.bio').slideUp("fast");
            $('#bio9').slideDown("fast");
        }
        else { $('#bio9').slideUp("fast");}
    });
    $('#ms10').click(function() {
        if ($('#bio10').is(':hidden')){
            $('.bio').slideUp("fast");
            $('#bio10').slideDown("fast");
        }
        else { $('#bio10').slideUp("fast");}
    });
    $('#ms11').click(function() {
        if ($('#bio11').is(':hidden')){
            $('.bio').slideUp("fast");
            $('#bio11').slideDown("fast");
        }
        else { $('#bio11').slideUp("fast");}
    });
    $('#ms12').click(function() {
        if ($('#bio12').is(':hidden')){
            $('.bio').slideUp("fast");
            $('#bio12').slideDown("fast");
        }
        else { $('#bio12').slideUp("fast");}
    });
    $('#ms13').click(function() {
        if ($('#bio13').is(':hidden')){
            $('.bio').slideUp("fast");
            $('#bio13').slideDown("fast");
        }
        else { $('#bio13').slideUp("fast");}
    });

    // Defines height of mugshot of teachers
    var mw = $('.mugshot').width();
    $('.mugshot').css({
        'height': mw + 'px'
    });
    $('.ms-container').css({
        'height': mw + 'px'
    });

    // Something
    $('#show').hide();
    $('#hide').click(function(){
            $('#text').addClass('texthide').removeClass('textshow');
            $('#hide').hide();
            $('#show').show();
        });
    $('#show').click(function(){
            $('#text').addClass('textshow').removeClass('texthide');
            $('#show').hide();
            $('#hide').show();
        });
    $('.showcontent').click(function(){
            $('#text').addClass('textshow').removeClass('texthide');
            $('#show').hide();
            $('#hide').show();
        });

    // Hint
    $('#hint').mouseenter(function() {
        $('#show-hide a').addClass('redish');
        $('#show-hide').addClass('show-show-hide').removeClass('show-hide-bg');
        $('.arrows a').addClass('redish').removeClass('blueish');
    }).mouseleave(function() {
        $('#show-hide a').removeClass('redish');
        $('#show-hide').addClass('show-hide-bg').removeClass('show-show-hide');
        $('.arrows a').addClass('blueish').removeClass('redish');
    });

    // Gallery
    $('#left').click(function(){
        if($('#wrapper').hasClass('bg1'))
        {
            $('#wrapper').addClass('bg15').removeClass('bg1');
        }
        else
        {
            if($('#wrapper').hasClass('bg15'))
        {
            $('#wrapper').addClass('bg14').removeClass('bg15');
        }
        else
        {
            if($('#wrapper').hasClass('bg14'))
        {
            $('#wrapper').addClass('bg13').removeClass('bg14');
        }
        else
        {
            if($('#wrapper').hasClass('bg13'))
        {
            $('#wrapper').addClass('bg12').removeClass('bg13');
        }
        else
        {
           if($('#wrapper').hasClass('bg12'))
        {
            $('#wrapper').addClass('bg11').removeClass('bg12');
        }
        else
        {
          if($('#wrapper').hasClass('bg11'))
        {
            $('#wrapper').addClass('bg10').removeClass('bg11');
        }
        else
        {
          if($('#wrapper').hasClass('bg10'))
        {
            $('#wrapper').addClass('bg9').removeClass('bg10');
        }
        else
        {
            if($('#wrapper').hasClass('bg9'))
        {
            $('#wrapper').addClass('bg8').removeClass('bg9');
        }
        else
        {
           if($('#wrapper').hasClass('bg8'))
        {
            $('#wrapper').addClass('bg7').removeClass('bg8');
        }
        else
        {
            if($('#wrapper').hasClass('bg7'))
        {
            $('#wrapper').addClass('bg6').removeClass('bg7');
        }
        else
        {
            if($('#wrapper').hasClass('bg6'))
        {
            $('#wrapper').addClass('bg5').removeClass('bg6');
        }
        else
        {
           if($('#wrapper').hasClass('bg5'))
        {
            $('#wrapper').addClass('bg4').removeClass('bg5');
        }
        else
        {
            if($('#wrapper').hasClass('bg4'))
        {
            $('#wrapper').addClass('bg3').removeClass('bg4');
        }
        else
        {
          if($('#wrapper').hasClass('bg3'))
        {
            $('#wrapper').addClass('bg2').removeClass('bg3');
        }
        else
        {
          if($('#wrapper').hasClass('bg2'))
        {
            $('#wrapper').addClass('bg1').removeClass('bg2');
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
    });
    $('#right').click(function(){
        if($('#wrapper').hasClass('bg1'))
        {
            $('#wrapper').addClass('bg2').removeClass('bg1');
        }
        else
        {
            if($('#wrapper').hasClass('bg2'))
        {
            $('#wrapper').addClass('bg3').removeClass('bg2');
        }
        else
        {
            if($('#wrapper').hasClass('bg3'))
        {
            $('#wrapper').addClass('bg4').removeClass('bg3');
        }
        else
        {
            if($('#wrapper').hasClass('bg4'))
        {
            $('#wrapper').addClass('bg5').removeClass('bg4');
        }
        else
        {
           if($('#wrapper').hasClass('bg5'))
        {
            $('#wrapper').addClass('bg6').removeClass('bg5');
        }
        else
        {
          if($('#wrapper').hasClass('bg6'))
        {
            $('#wrapper').addClass('bg7').removeClass('bg6');
        }
        else
        {
          if($('#wrapper').hasClass('bg7'))
        {
            $('#wrapper').addClass('bg8').removeClass('bg7');
        }
        else
        {
            if($('#wrapper').hasClass('bg8'))
        {
            $('#wrapper').addClass('bg9').removeClass('bg8');
        }
        else
        {
           if($('#wrapper').hasClass('bg9'))
        {
            $('#wrapper').addClass('bg10').removeClass('bg9');
        }
        else
        {
            if($('#wrapper').hasClass('bg10'))
        {
            $('#wrapper').addClass('bg11').removeClass('bg10');
        }
        else
        {
            if($('#wrapper').hasClass('bg11'))
        {
            $('#wrapper').addClass('bg12').removeClass('bg11');
        }
        else
        {
           if($('#wrapper').hasClass('bg12'))
        {
            $('#wrapper').addClass('bg13').removeClass('bg12');
        }
        else
        {
            if($('#wrapper').hasClass('bg13'))
        {
            $('#wrapper').addClass('bg14').removeClass('bg13');
        }
        else
        {
          if($('#wrapper').hasClass('bg14'))
        {
            $('#wrapper').addClass('bg15').removeClass('bg14');
        }
        else
        {
          if($('#wrapper').hasClass('bg15'))
        {
            $('#wrapper').addClass('bg1').removeClass('bg15');
        }
        else
        {
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
    });
