$(document).ready(function() {
	$('.galerea').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 250, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});

$(function(){
	$('.hamburger').click(function(){
  $('.hamburger').next('.fix').slideToggle();
})
});

// $(function() {
// 	$('.item').magnificPopup({
// 		type: 'image',
// 		gallery : {
// 			enabled : true
// 		}
// 	});
// });

