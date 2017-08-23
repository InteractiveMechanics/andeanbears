Game = (function() {

	 var init = function() {
        bindEvents();
    }

    var clearGame = function() {
    	$('#game-map').html('');
        $('#game-btn-wrapper').html('');
        $('#game-complete').addClass('hidden');
        if ($('.droppable-widget').hasClass('animated tada')) {
            $('.droppable-widget').removeClass('animated tada');
        }
    }

    var showStartOver = function() {
        if ($('.dragged').length) {
            $('#game-reset-btn').removeClass('hidden');
        }
    }

    var showComplete = function() {
        var numberDropped = $('.dropped').length;
        console.log(numberDropped);
        if (numberDropped == 8) {
            setTimeout(function() {  $('.dragged').addClass('animated tada'); }, 5000);
            setTimeout(function() {  $('#game-complete').removeClass('hidden').addClass('animated fadeIn'); }, 7000);
        }
    }

    var hideComplete = function() {
        if (!$('#game-complete').hasClass('hidden')) {
            $('#game-complete').addClass('hidden');
        }
    }

    var showExplore = function() {
        $('#game').addClass('hidden');
        Explore.buildExplore();
    }

    var buildMarkers = function() {
        $('#game-template').tmpl(data.locations).appendTo('#game-map');
        $('#game-btn-template').tmpl().appendTo('#game-btn-wrapper');
    }

    var markBrownBear = function() {
        $('.droppable-widget[data-bear="7"]').addClass('brown-bear').append('<div class="brown-bear-marker hidden"></div>');
    }


    var dropBrownBear = function() {
        $('.brown-bear').not('dropped').find('.brown-bear-marker').removeClass('hidden');
        $('.brown-bear').not('dropped').addClass('.dropped');
    }

    


   
    var buildGame = function() {
        Explore.clearProfile();
        Explore.clearExplore();
    	clearGame();
    	if ($('#game').hasClass('hidden')) {
    		$('#game').removeClass('hidden').addClass('animated fadeIn');
    	}
    	//$('#game-template').tmpl().appendTo('#game');
        buildMarkers();
    	Utilities.clearHome();
        markBrownBear();
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
                var droppedElement = $(this);
                var hint1 = $(this).find('.hint-1');
                var hint2 = $(this).find('.hint-2');
               
    		 	   	if(ui.draggable.is('[data-bear="' + droppableNumber + '"]')) {

    		 	   		ui.draggable.draggable('option', 'revert', 'invalid');
    		 	   		ui.draggable.addClass('dragged animated pulse');
                        $(this).addClass('dropped');

                        setTimeout(function() {  correctAnswer.removeClass('hidden'); }, 1000);
                        setTimeout(function() {  $(this).css('z-index', '4'); }, 1000);
                        
                        if ( $('.correct-answer') != correctAnswer ) {
                            $('.correct-answer').addClass('hidden');
                        }
    		 	   		//correctAnswer.removeClass('hidden');
                        setTimeout(function(){ correctAnswer.addClass('hidden'); }, 8000);
                        setTimeout(function(){ $(this).css('z-index', 'initial'); }, 8000);
                       
    		 	   	 	ui.draggable.position({
			              	my: "center",
			              	at: "center",
			              	of: $(this),
			              	using: function(pos) {
			                	$(this).animate(pos, 200, "linear");
			             	}
    		 	   		});

        		 	   	ui.draggable.draggable('option', 'disabled', true);

                        showStartOver();
                        showComplete();
                        if ($(this).hasClass('brown-bear')) {
                            dropBrownBear();
                        }


    		 		} else {
    		 			ui.draggable.draggable('option', 'revert', 'valid');

                        if (!hint1.hasClass('answered')) {
                            hint1.removeClass('hidden').addClass('answered');
                            $(this).css('background', '');
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
        $(document).on('click tap', '.botw-btn', showExplore);
        $(document).on('click tap', '#game-map', hideComplete);
    }

	return {
	        init: init,
	        buildGame: buildGame
	    }


})();