!function(){"use strict"}(),function(){"use strict";window.AST=Ember.Application.create(),AST.ref=new Firebase("https://altschooltiles.firebaseio.com/"),AST.ApplicationAdapter=DS.FirebaseAdapter.extend({firebase:AST.ref})}(),function(){"use strict";AST.Router.map(function(){this.route("index",{path:"/"})}),AST.IndexRoute=Ember.Route.extend({})}(),function(){"use strict";AST.Board=DS.Model.extend({colorValues:DS.attr("string")})}(),function(){"use strict";AST.IndexController=Ember.Controller.extend({actions:{saveBoard:function(){var e=[];$(".tile").each(function(){e.push($(this).css("background-color"))});var o=this.store.createRecord("board",{colorValues:e});o.save(),alert("Your board has been saved!")},resetBoard:function(){var e=$(".tile");e.removeClass("randomColor"),e.css("background-color","white")}}})}(),function(){"use strict";AST.IndexView=Ember.View.extend({didInsertElement:function(){this._super();var e;$(".tile").on("click",function(){console.log("Hay");var o=$(this);e="#"+Math.floor(16777215*Math.random()).toString(16),o.hasClass("randomColor")?(o.removeClass("randomColor"),o.css("background-color","white")):(o.addClass("randomColor"),o.css("background-color",e))})}})}();