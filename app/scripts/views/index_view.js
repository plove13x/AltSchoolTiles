/* global Ember, AST */
		

(function(){
'use strict';


	AST.IndexView = Ember.View.extend({

		didInsertElement : function(){
			this._super();							// GO BACK AND ADD scheduleOnce, etc.
			
			var newColor;
			$('.tile').on('click', function(){
				console.log('Hay');
				var $this = $(this);

				newColor = '#'+Math.floor(Math.random()*16777215).toString(16);

				if ( $this.hasClass('randomColor') ) {
					$this.removeClass('randomColor');
					$this.css('background-color', 'white');
				} else {
					$this.addClass('randomColor');
					$this.css('background-color', newColor);	
				}

			});
		}

	});


})();

