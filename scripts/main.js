$(document).ready(function() {

	let ac_flaps = $('article ul div.ac_flap'),
		triggers = $('article ul h3'),
		sk_trig = $('.skills-trigger'),
		skillbars = $('.skillbar'),
		links = $('#links'),
		extra_nav = $('#myNav'),
		close_btn = $('.closebtn')
		menu_btn = $('#menu_button'),
		show_menu = $('header ul.main_nav');
	

	ac_flaps.hide();

	triggers.click(function() {
		let find_article = $(this).next('div.ac_flap');
		let find_wrapper = $(this).closest('.center');

		if(find_article.is(':visible')){
				find_article.slideUp(300);
		}else{
			find_wrapper.find('div.ac_flap').slideUp(300);
			find_article.slideDown(300);
		}
	});


	sk_trig.click(displaySkillLevel);



	if( $(window).width() > 400){
	links.click(openSideMenu);

	}else{
		links.click(function(event){
		extra_nav.animate({
			width: '100%'
		}, 50);
		});
	}

	close_btn.click(function(){
		extra_nav.animate({
			width: '0'
		}, 50);
	});


	menu_btn.click(openMiniMainMenu);




	function displaySkillLevel() {
	skillbars.each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).data('percent')
		}, 1500);
	});
	}

	function openMiniMainMenu(){
		show_menu.slideToggle(200);
		event.stopPropagation();
	}

	function openSideMenu(event){
		extra_nav.animate({
			width: '43%'
		}, 50);
	}

});