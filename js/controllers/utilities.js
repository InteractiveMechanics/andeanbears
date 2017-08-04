Utilities = (function() {
	var timeout = [];
    var duration = 90000; //90000

    var init = function() {
        bindEvents();
    }

    var animateChallengeBtn = function() {
        $('#home-btn-game').addClass('animated pulse');
        setTimeout(function() {  Game.buildGame(); }, 2000);
    }

    var animateExploreBtn = function() {
        $('#home-btn-explore').addClass('animated pulse');
        setTimeout(function() {  Explore.buildExplore(); }, 2000);
        
    }

    var animateResetExplore= function() {
        $('.reset-btn-explore').css('background-image', 'url("../../assets/explore/btn-home-pushed.png")').addClass('animated pulse');
        setTimeout(function() { resetInteractive(); }, 3000);
    }

    var unanimateBtn = function() {
        $('#home-btn-game').removeClass('animated pulse');
        $('#home-btn-explore').removeClass('animated pulse');
    }

     var bindEvents = function() {
        $(document).on('click tap', resetTimeout);
        $(document).ready(resetInteractive);
        $(document).on('click tap', '#home-btn-explore', animateExploreBtn);
        $(document).on('click tap', '#home-btn-game', animateChallengeBtn);
        $(document).on('click tap', '.reset-btn', resetInteractive);
        $(document).on('click tap', '.reset-btn-explore', animateResetExplore);
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
        $('#profile').addClass('hidden');
        $('#home').removeClass('hidden');
        unanimateBtn();

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