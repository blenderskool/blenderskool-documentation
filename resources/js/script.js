function back_to_top() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
}

function open_mobile_menu() {
	if ($('.navigation .menu-wrap').css("visibility") === "visible")
	{
		$('.navigation .menu-wrap').css({'visibility': 'hidden', 'opacity': 0});  // Close the Menu
		$('.navigation').css({'background-color': 'rgba(0, 0, 0, 0)'});
		document.getElementById('mobileMenuIcon').innerText = 'menu';
	}
	else
	{
		$('.navigation .menu-wrap').css({'visibility': 'visible', 'opacity': 1}); // Open the Menu
		$('.navigation').css({'background-color': 'black'});
		document.getElementById('mobileMenuIcon').innerText = 'close';
	}
}

$(window).on('scroll', function() {
	var y_scroll_pos = window.pageYOffset;
	var scroll_pos_test = 0;

	if (($('.navigation .menu-wrap').css("visibility") === "hidden") || $('.navigation .mobile-menu').css("display") === "none")
	{
		if(y_scroll_pos > scroll_pos_test)
			$('.navigation').css({'background-color': 'rgba(0, 0, 0, 0.3)', 'padding': "5px 100px"});
		else if (y_scroll_pos==0)
			$('.navigation').css({'background-color': 'rgba(0, 0, 0, 0)', 'padding': "10px 100px"});
	}
	else
		$('.navigation').css({'background-color': 'black', 'padding': "5px 100px"});

	if (y_scroll_pos > 0.65*window.screen.availHeight)
		$('.to-top-container').css({'opacity': '1'});
	else
		$('.to-top-container').css({'opacity': '0'});

});

window.onload = function(e){
    if (window.location.pathname.includes("enrich"))
    {
    	$('.latest-bar').css({'display': 'none'});  // Do not show Enrich Promo on Enrich pages
    	$('.navigation .mobile-menu').css({'top': '30px'});
    }
    else
    	$('.navigation .mobile-menu').css({'top': '65px'});

	$('.crisp-client').css({'opacity': '1'})
}

if (!!document.getElementById('btnGetStarted')) {
	document.getElementById('btnGetStarted').addEventListener('click', function(e) {
			event.preventDefault();

			$('html, body').animate({
					scrollTop: $('#get-started').offset().top
			}, 500);
	});
}
