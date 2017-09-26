Utilities = (function() {
	var timeout = [];
    var duration = 120000; //90000

    var init = function() {
        bindEvents();
    }



    var animateChallengeBtn = function() {
        $('#home-btn-game').addClass('animated pulse');
        setTimeout(function() {  Game.buildGame(); }, 1000);
        sendGAEvent("Take the Bear Challenge");
    }


    var animateResetBtn = function() {
        $('.reset-btn').css('background-image', 'url("../../assets/game/BC-home-btn-down.png")').addClass('animated pulse');
        setTimeout(function() { resetInteractive(); }, 1000);
        setTimeout(function() { unanimateResetBtn(); }, 1500);
    }

    var animateResetBtnBlue = function() {
        $('.reset-btn-blue').css('-webkit-filter', 'drop-shadow(0 0 10px #06CAFE)').css('background-image', 'url("../../assets/explore/profile/btn-home-active.png")').addClass('animated pulse');
        setTimeout(function() { resetInteractive(); }, 1000);
        setTimeout(function() { unanimateResetBtnBlue(); }, 1500);
        sendGAEvent("Back to home");
    } 

    var animateExploreBtn = function() {
        $('#home-btn-explore').addClass('animated pulse');
        setTimeout(function() {  Explore.buildExplore(); }, 1000);
        sendGAEvent("Explore Bears of the World");
    }

    var animateResetExplore= function() {
        $('.reset-btn-explore').css('background-image', 'url("../../assets/explore/btn-home-pushed.png")').addClass('animated pulse');
        setTimeout(function() { resetInteractive(); }, 1000);
        setTimeout(function() { unanimateResetExplore(); }, 1500);
        sendGAEvent("Back to home");
    }

    var animateProfileReset = function() {
        $('#reset-profile').css('background-image', 'url("../../assets/explore/profile/btn-home-active.png")').addClass('animated pulse');
        setTimeout(function() { resetInteractive(); }, 1000);
        setTimeout(function() { unanimateProfileReset(); }, 1500);
        sendGAEvent("Back to home");
    }

    var unanimateBtn = function() {
        $('#home-btn-game').removeClass('animated pulse');
        $('#home-btn-explore').removeClass('animated pulse');
    }

    var resetVisitedState = function() {
        $('.explore-btn-text').removeClass('visited');
        $('.explore-btn-img').removeClass('visited');
        //console.log('resetVisitedState');
    }

    var resetActiveState = function() {
        $('.explore-btn-img').removeClass('active');
        //console.log('resetActiveState');

    }

    var unanimateResetExplore = function() {
        $('.reset-btn-explore').css('background-image', 'url("../../assets/explore/btn-home.png")').removeClass('animated pulse');
    }

    var unanimateResetBtn = function() {
        $('.reset-btn').css('background-image', 'url("../../assets/game/BC-home-btn.png")').removeClass('animated pulse');
    }

    var unanimateProfileReset = function() {
        $('#reset-profile').css('background-image', 'url("../../assets/explore/profile/btn-home.png")').removeClass('animated pulse');
    }

    var unanimateResetBtnBlue = function() {
         $('#reset-profile').css('-webkit-filter', 'initial').css('background-image','url("../../assets/explore/profile/btn-home.png")').removeClass('animated pulse');
    }




    var bindEvents = function() {
        $(document).on('click tap drag', resetTimeout);
        $(document).ready(resetInteractive);
        $(document).on('click tap drag', '#home-btn-explore', animateExploreBtn);
        $(document).on('click tap drag', '#home-btn-game', animateChallengeBtn);
        $(document).on('click tap drag', '#reset-profile', animateProfileReset);
        $(document).on('click tap drag', '.reset-btn', animateResetBtn);
        $(document).on('click tab drag', '.reset-btn-blue', animateResetBtnBlue);
        $(document).on('click tap drag', '.reset-btn-explore', animateResetExplore);
        
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
        resetVisitedState();
        resetActiveState();
        $('#explore').addClass('hidden');
        $('#game').addClass('hidden');
        $('#profile').addClass('hidden');
        $('#home').removeClass('hidden');
        $('#selfies-btn').data('lightGallery').destroy();
        unanimateBtn();
        //TODO: reset timeout
        sendGAEvent("Session end");
    }

    var clearHome = function() {
    	$('#home').addClass('hidden');
    }



    return {
        init: init,
        clearHome: clearHome
    }


})();