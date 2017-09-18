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
        if (numberDropped == 9) {
            setTimeout(function() {  
                $('.dragged').addClass('animated tada'); 
                $('.brown-bear').addClass('animated tada'); }, 8000);
            setTimeout(function() {  
                $('#game-complete').removeClass('hidden').addClass('animated fadeIn');
                $('#game-complete').removeClass('hidden').addClass('animated fadeIn'); }, 9000);
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
         var brownBearRing = '<svg version="1.1" data-bear="7" id="brown-ring2" class="animated fadeIn brown-bear-ring hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 139 139" style="enable-background:new 0 0 139 139;" xml:space="preserve"><style type="text/css">.st0{fill:; enable-background:new;}.st1{fill: ;}</style><path class="st0" d="z"/><g id="Layer_2"><g><path class="st1" d="M69.5,15.8c29.7,0,53.7,24.1,53.7,53.7s-24.1,53.7-53.7,53.7S15.8,99.2,15.8,69.5S39.8,15.8,69.5,15.8 M69.5,6.3c-16.9,0-32.7,6.6-44.7,18.5S6.3,52.6,6.3,69.5s6.6,32.7,18.5,44.7s27.8,18.5,44.7,18.5s32.7-6.6,44.7-18.5 s18.5-27.8,18.5-44.7s-6.6-32.7-18.5-44.7S86.4,6.3,69.5,6.3L69.5,6.3z"/></g></g></svg>';   

        $('.droppable-widget[data-bear="7"]').addClass('brown-bear').append('<div class="brown-bear-marker hidden"></div>').append(brownBearRing);
    }


    var dropBrownBear = function() {
        $('.brown-bear').not('dropped').find('.brown-bear-marker').removeClass('hidden');
        $('.brown-bear').not('dropped').find('.brown-bear-ring').removeClass('hidden');
        $('.brown-bear').not('dropped').find('.empty-btn').css('display', 'none');
        $('.brown-bear').not('dropped').addClass('dropped');
    }


    var animateGameResetBtn = function() {
        $('#game-reset-btn').css('background-image', 'url("../../assets/game/BC-startover-btn-down.png")').addClass('animated pulse');
        setTimeout(function() { buildGame(); }, 1000);
        setTimeout(function() { unanimateGameResetBtn(); }, 1500);
    }

    var unanimateGameResetBtn = function() {
         $('.game-reset-bnt').css('background-image', 'url("../../assets/game/BC-startover-btn.png")').removeClass('animated pulse');
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
    		snap: false,
    		revert: 'invalid',
		    snapMode: 'inner',
		    snapTolerance: 20,
		    cursorAt: {top: 50, left: 50}
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
                var timeoutCorrectAnswer;
                var timeoutHints;

		 	    if(ui.draggable.is('[data-bear="' + droppableNumber + '"]')) {

		 	   		ui.draggable.draggable('option', 'revert', 'invalid');
		 	   		ui.draggable.addClass('dragged animated pulse');
                    $(this).addClass('dropped');

                    clearTimeout(timeoutHints);
                    $('.hint-1').addClass('hidden');
                    $('.hint-2').addClass('hidden');
                    setTimeout(function() {  correctAnswer.removeClass('hidden'); }, 1000);
                    setTimeout(function() {  $(this).css('z-index', '4'); }, 1000);
                    
                    if ( $('.correct-answer') != correctAnswer ) {
                        $('.correct-answer').addClass('hidden');
                    }
		 	   		//correctAnswer.removeClass('hidden');

                    timeoutCorrectAnswer = setTimeout(function() {
                        correctAnswer.addClass('hidden');
                        $(this).css('z-index', 'initial');

                    }, 8000);


                    //setTimeout(function(){ correctAnswer.addClass('hidden'); }, 8000);
                    //setTimeout(function(){ $(this).css('z-index', 'initial'); }, 8000);
                   
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


                    clearTimeout(timeoutCorrectAnswer);
                    $('.correct-answer').addClass('hidden');

                    clearTimeout(timeoutHints);
                    $('.hint-1').addClass('hidden');
                    $('.hint-2').addClass('hidden');

                    
                    

                    if (!hint1.hasClass('answered')) {
                       
                        hint1.removeClass('hidden').addClass('answered');
                        $(this).css('background', '');

                        // timeoutHint1 = setTimeout(function() {
                        //     hint1.addClass('hidden');
                        // }, 5000);

                        timeoutHints = setTimeout(function() {
                            hint1.addClass('hidden');
                            hint2.addClass('hidden');
                        }, 5000);

                        //setTimeout(function(){ hint1.addClass('hidden'); }, 5000);
                    } else {
                        hint2.removeClass('hidden');
                        
                        // timeoutHint2 = setTimeout(function() {
                        //     hint2.addClass('hidden');
                        // }, 5000);

                         timeoutHints = setTimeout(function() {
                            hint1.addClass('hidden');
                            hint2.addClass('hidden');
                        }, 5000);


                        //setTimeout(function(){ hint2.addClass('hidden'); }, 5000);
                    }
				}
    		
    		}

    	});
    }




     var bindEvents = function() {
        $(document).on('click tap', '#game-reset-btn', animateGameResetBtn);
        $(document).on('click tap', '.botw-btn', showExplore);
        $(document).on('click tap', '#game-map', hideComplete);
    }

	return {
	        init: init,
	        buildGame: buildGame
	    }


})();