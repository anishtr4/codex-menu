//created by  anish  
//for more info contact me on :anishtr4@gmail.com
(function ($) {

    $.fn.codexmenu = function (options) {

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
			mouseaction : 'right',
            jquery_ui: 'yes',
            animation: 'slide',     /* if u are using jquery_ui(slide,fold,bounce,scale) or (slideDown,show) */
			speed     : '5000',
        }, options);

        return this.each(function () {
     
		
            var new_element;



            var $this = $(this);

  $(document).bind('contextmenu', function (e) {
                        
						 return false;

                    });
            $this.bind('mousedown', function(e) {
			var menuitem_array = settings.menuitem;
            ui_library = settings.jquery_ui;
            animation_speed = settings.speed;
			mouseaction_ = settings.mouseaction;
			animation = settings.animation;
		        if(mouseaction_ == "right")
				{
					action = 2;
				}
				else
				{
					action = 0;
				}
		
                if (e.button == action) {

                  
                    $('.xcontext_menu').remove();
					
                    var y = e.pageY ;
                    var x = e.pageX ;

                 
					  $('body').append('<div class="xcontext_menu"><ul></ul></div>');
                    $('.xcontext_menu').css({
                        left: x,
                        top: y,
                    });
					
					
                    jQuery.each(menuitem_array, function (i, val) {
                        var newi = i;
                        value = val;


                        if (value.indexOf("funct_") > -1) {

                            var textAfterfunct = value.split('funct_')[1];
                            new_element = "<li><a href='javascript:void(0)' onclick='return " + textAfterfunct + ";'>" + newi + "</a></li>";

                        } else {

                            new_element = "<li><a href='" + val + "'>" + newi + "</a></li>";
                        }
						
                        $(new_element).appendTo($('.xcontext_menu ul'));
						$('.xcontext_menu').hide();
                        if (ui_library == "yes") {

                            $('.xcontext_menu').show(animation, animation_speed);

                        } else {
							
                            $('.xcontext_menu').slideDown(animation_speed);
                        }
                    });


                    return false;
                } else {
                    var target = $(event.target);
                    if (!target.is(".xcontext_menu *, .xcontext_menu")) {
                        $('.xcontext_menu').remove();
                    }

                }
            });




        });

    }

}(jQuery));