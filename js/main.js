$(function(){
	data = function() {};

    $.get('/game.json', function(response) {
        data = response;

        Utilities.init();
		Game.init();
		Explore.init();

    }, 'json');


});
