$(window).scroll( function() {
	var windowScroll = $(this).scrollTop();

	$('header > #zoom').css({
    'top': '-' + windowScroll + 'px',
    'right': '-' + windowScroll + 'px',
    'left': '-' + windowScroll + 'px'
  });
});