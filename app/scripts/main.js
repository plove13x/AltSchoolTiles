'use strict';


var newColor;

$('.tile').on('click', function(){
	var $this = $(this);

	newColor = '#'+Math.floor(Math.random()*16777215).toString(16);

	if ( $this.hasClass('randomColor') ) {
		$this.removeClass('randomColor');
		$this.css('background', 'white');
	} else {
		$this.addClass('randomColor');
		$this.css('background', newColor);	
	}

});


$('.resetBtn').on('click', function(e) {
	e.preventDefault();
	var $tile = $('.tile');
	$tile.removeClass('randomColor');
	$tile.css('background', 'white');
});