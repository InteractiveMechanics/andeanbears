Game = (function() {

	 var init = function() {
        bindEvents();
    }

    var clearGame = function() {
    	$('#game').html('');
    }

    var buildGame = function() {
    	clearGame();
    	if ($('#game').hasClass('hidden')) {
    		$('#game').removeClass('hidden');
    	}
    	$('#game-template').tmpl().appendTo('#game');
    	Utilities.clearHome();
    	//clear the home screen
    	$('.draggable-widget').draggable({
    		snap: '.droppable-widget', 
		    snapMode: 'interior',
		    snapTolerance: 20,
		    cursorAt: {top: 10, left: 100}
    	});
    	$('.droppable-widget').droppable();
    }

     var bindEvents = function() {
       
    }

	return {
	        init: init,
	        buildGame: buildGame
	    }


})();