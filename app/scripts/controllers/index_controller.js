/* global Ember, AST */

(function(){
'use strict';


	AST.IndexController = Ember.Controller.extend({
		actions: {
		    saveBoard: function(){

				// var colorValues = this.get('colorValues');
				var colorValues = [];

				$( '.tile' ).each(function( cValue ) {
					colorValues.push($(this).css('background-color'));
				});

				var board = this.store.createRecord('board', {
						// user: this.get('controllers.session.currentUser'),
						colorValues: colorValues,
				});
				board.save();

				alert('Your board has been saved!');
			},

			resetBoard: function(){
				var $tile = $('.tile');
				$tile.removeClass('randomColor');
				$tile.css('background-color', 'white');
			}
		},

	});


})();