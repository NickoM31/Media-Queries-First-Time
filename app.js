(function(){
	"use strict";
	var app = {
		init : function(){
			$('button').on('click', app.hideMenu);
		},
		hideMenu : function(){
			$('.menu,.menu2').hide();
		},




	};
	$(document).ready(function(){
		app.init();
	});
})();