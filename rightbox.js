//created by  anish  
//for more info contact me on :anishtr4@gmail.com
(function ($) {

    $.fn.magicmenu = function (options) {

        // Establish our default settings
        var settings = $.extend({
            menuitem: {
                Home: 'form.html',
                Nextpage: 'http://www.youtube.com',
                Tottalpages: 'funct_demo()',
                Find_us_on_facebook: 'http://www.facebook.com',
                Refresh: 'www.google.com',
                Exit: 'www.google.com'
            },
            jquery_ui: 'yes',
            animation: 'slide',
            /* if u are using jquery_ui(slide,fold,bounce,,scale) or (slideDown,show) */
            speed: '300',
            message: 'message',
        }, options);

        return this.each(function () {
            var menuitem_array = settings.menuitem;
            ui_library = settings.jquery_ui;
            animation = settings.animation;
            animation_speed = settings.speed;
            var new_element;



            var $this = $(this);


            $this.mousedown(function (e) {
                if (e.button == 2) {

                    $(document).bind('contextmenu', function (e) {
                        e.preventDefault();

                    });
                    $('.right').remove();
                    var y = (e.pageY - window.pageYOffset);
                    var x = (e.pageX - window.pageXOffset);

                    var i = "<div class='right'><ul></ul></div>";

                    $(i).appendTo($('body'));
                    $('.right').css({
                        left: x,
                        top: y,
                    });
                    jQuery.each(menuitem_array, function (i, val) {
                        var newi = i.replace(/_/g, "&nbsp;");
                        value = val;


                        if (value.indexOf("funct_") > -1) {

                            var textAfterfunct = value.split('funct_')[1];
                            new_element = "<li><a href='javascript:void(0)' onclick='return " + textAfterfunct + ";'>" + newi + "</a></li>";

                        } else {

                            new_element = "<li><a href='" + val + "'>" + newi + "</a></li>";
                        }
                        $(new_element).appendTo($('.right ul'));
                        if (ui_library == "yes") {

                            $('.right').hide().show(animation, animation_speed);

                        } else {
                            $('.right').hide().slideDown(animation_speed);
                        }
                    });


                    return false;
                } else {
                    var target = $(event.target);
                    if (!target.is(".right *, .right")) {
                        $('.right').remove();
                    }

                }
            });




        });

    }

}(jQuery));