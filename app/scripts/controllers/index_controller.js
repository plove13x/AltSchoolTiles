/* global Ember, AST */

(function(){
'use strict';


	AST.IndexController = Ember.Controller.extend({
		actions: {
		    saveBoard: function(){
		    	alert('Hay');
			},

			resetBoard: function(){
				var $tile = $('.tile');
				$tile.removeClass('randomColor');
				$tile.css('background', 'white');
			}
		},

	});


})();