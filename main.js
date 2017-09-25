$(function(){
	data = function() {};

    $.get('game.json', function(response) {
        data = response;

        Utilities.init();
        Explore.init();
		Game.init();
		
    }, 'json');


});
