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

            var BV = new $.BigVideo();
            BV.init();
            BV.show('http://pdl.vimeocdn.com/28702/014/202991467.mp4?token2=1400291403_b50c8e0c484b3bae8f08c07440a8af85',{ambient:true});

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
