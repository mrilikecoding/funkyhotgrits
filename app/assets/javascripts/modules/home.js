// JQuery config

$.ajaxSetup(
    {
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    });


/**
 FunkyHotGrits Global JS

 @class home
 @namespace FunkyHotGrits
 @type {Object}
 **/
var FunkyHotGrits = FunkyHotGrits || {};


FunkyHotGrits.home = (function($, document, window, undefined) {
    "use strict";

    // configuration properties


    /* Public Methods _________________________________________________________________ */

    /**
     The initialization of the page and plugins used in the page.
     @method init
     @return {Null} No return value
     **/

    function init() {
        // video background
        var BV = new $.BigVideo();


        BV.init();

        var url = "http://www.urbanjuju.com/fhg_statics/FHGwebbg.mp4"


        if (!Modernizr.touch) {
            BV.show(url,{ambient:true});

            BV.getPlayer().on('durationchange',function(){
                fadeInVideo();
            });
        }

        var $videobg = $('#big-video-wrap');

        // global. currently active menu item
        var current_item = 0;

        // settings
        var section_hide_time = 800;
        var section_show_time = 800;

        // Switch section
        $(document).on('click', '.mainmenu a', function(){

            $videobg.fadeOut(500, function(){
                BV.getPlayer().pause()
            });

            if($(this).hasClass('home')){
                BV.getPlayer().play()
                setTimeout(function(){
                    fadeInVideo();
                }, 500);
            }

            if(!$(this).hasClass('active')) {
                current_item = this;
                // close all visible divs with the class of .section
                $('.section:visible').fadeOut( section_hide_time, function() {
                    $('a', '.mainmenu').removeClass( 'active' );
                    $(current_item).addClass( 'active' );
                    var new_section = $( $(current_item).attr('href') );
                    new_section.fadeIn( section_show_time );
                });
            }
            return false;
        });

        function fadeInVideo(){
            setTimeout(function(){
                $videobg.fadeIn(3000);
            }, 2500);
        }


    }


    /* Private Methods ________________________________________________________________ */





    return {
        init: init
    };

}(jQuery, document, window, undefined));


jQuery(function() {
    "use strict";
    FunkyHotGrits.home.init();
});
