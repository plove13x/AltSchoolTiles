/* global Ember, AST, Firebase, DS */

(function(){
'use strict';


	window.AST = Ember.Application.create();

	AST.ref = new Firebase('https://altschooltiles.firebaseio.com/');

	AST.ApplicationAdapter = DS.FirebaseAdapter.extend({
		firebase: AST.ref
	});

})();