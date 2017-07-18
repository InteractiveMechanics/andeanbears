Utilities = (function() {
	var timeout = [];
    var duration = 90000; //90000

    var init = function() {
        bindEvents();
    }

     var bindEvents = function() {
        $(document).on('click tap', resetTimeout);
        $(document).ready(resetInteractive);
        $(document).on('click tap', '#home-btn-explore', Explore.buildExplore);
        $(document).on('click tap', '#home-btn-game', Game.buildGame);
        $(document).on('click tap', '.reset-btn', resetInteractive);
    }

    var resetTimeout = function() {
    	if (timeout) {
            $.each(timeout, function(index, value){
                clearTimeout(value);
                timeout.splice(index, 1);
            });
        }
        timeout.push(setTimeout(resetInteractive, duration));
    }

    var resetInteractive = function() {
        $('#explore').addClass('hidden');
        $('#game').addClass('hidden');
        $('#home').removeClass('hidden');

        //TODO: reset timeout
    }

    var clearHome = function() {
    	$('#home').addClass('hidden');
    }



    return {
        init: init,
        clearHome: clearHome
    }


})();