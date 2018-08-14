window.onload = function(){
	var preload = document.querySelector(".preloader");
	setTimeout(function(){
		if(!preload.classList.contains("bur")){
			preload.classList.add("bur");
		}
	},1000);

	var mobile = document.querySelector(".mobile-menu");
	mobile.onclick = function (){
		var list =  document.querySelector(".nav-menu");
		list.classList.toggle("offset");
	};
}


$(function(){
	$(".serv-content:not(:first)").hide();
	$(".serv-h").click(function(){
	$(this).next().slideToggle(".serv-content").css({display:"flex"}).siblings(".serv-content:visible").slideUp();
	});
	
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1
	});
	
});