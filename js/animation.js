var $win = $(window);
var $sun = $('.sun');
var $dipper = $('.dipper');
var $ships =$('.icons img');

$win.on('scroll', function() {
	//console.log($win.scrollTop());
	$sun.css('transform', 'rotate(' + $win.scrollTop() / 5 + 'deg)');
	});


$('.icons-section').waypoint(function (){
	$icons.eq(0).addClass('js-icons-delay-1');
	$icons.eq(2).addClass('js-icons-delay-3');
	$icons.eq(3).addClass('js-icons-delay-2');
	$icons.addClass('js-icons-animate');
}, { offset: '60%' });