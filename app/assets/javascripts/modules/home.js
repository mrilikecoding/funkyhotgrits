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

        // global. currently active menu item
        var current_item = 0;

        // settings
        var section_hide_time = 1300;
        var section_show_time = 1300;

        // Switch section
        $("a", '.mainmenu').click(function(){
            if( ! $(this).hasClass('active') ) {
                current_item = this;
                // close all visible divs with the class of .section
                $('.section:visible').fadeOut( section_hide_time, function() {
                    $('a', '.mainmenu').removeClass( 'active' );
                    $(current_item).addClass( 'active' );
                    var new_section = $( $(current_item).attr('href') );
                    new_section.fadeIn( section_show_time );
                } );
            }
            return false;
        });

        var BV = new $.BigVideo();
        BV.init();

        var url = "http://www.urbanjuju.com/fhg_statics/FHG%20Website%20Background.mp4"


        if (Modernizr.touch) {
            BV.show('video-poster.jpg');
        } else {
            BV.show(url,{ambient:true});
            BV.getPlayer().on('durationchange',function(){
                $('#big-video-wrap').fadeIn(3000);
            });
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
