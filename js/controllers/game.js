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
    		//revert: 'invalid',
		    snapMode: 'interior',
		    snapTolerance: 20,
		    cursorAt: {top: 10, left: 100}
    	});
    	$('.droppable-widget').droppable({
    		drop: function( event, ui ) {
    		 	var droppableNumber = $(this).data('bear');
    		 	var originalLeft = $(this).css('left');
    		 	var originalTop = $(this).css('top');
                var correctAnswer = $(this).find('.correct-answer');
                var hint1 = $(this).find('.hint-1');
                var hint2 = $(this).find('.hint-2');

    		 	   	if(ui.draggable.is('[data-bear="' + droppableNumber + '"]')) {
    		 	   		ui.draggable.draggable('option', 'revert', 'invalid');
    		 	   		ui.draggable.css('background-color', 'green');
    		 	   		correctAnswer.removeClass('hidden');
                        setTimeout(function(){ correctAnswer.addClass('hidden'); }, 3000);
    		 	   	 	ui.draggable.position({
			              	my: "center",
			              	at: "center",
			              	of: $(this),
			              	using: function(pos) {
			                	$(this).animate(pos, 200, "linear");
			             	}
    		 	   		});

    		 	   	ui.draggable.draggable('option', 'disabled', true);

    		 		} else {
    		 			ui.draggable.draggable('option', 'revert', 'valid');

                        if (!hint1.hasClass('answered')) {
                            hint1.removeClass('hidden').addClass('answered');
                            setTimeout(function(){ hint1.addClass('hidden'); }, 3000);
                        } else {
                            hint2.removeClass('hidden');
                            setTimeout(function(){ hint2.addClass('hidden'); }, 3000);
                        }
    		 			
    			
    				}
    		
    		}

    	});
    }




     var bindEvents = function() {
        $(document).on('click tap', '#game-reset-btn', buildGame);
    }

	return {
	        init: init,
	        buildGame: buildGame
	    }


})();