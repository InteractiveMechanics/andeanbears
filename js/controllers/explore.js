Explore = (function() {

	 var init = function() {
        bindEvents();
    }

    var clearExplore = function() {
    	$('#explore').addClass('hidden');
    }

    var clearProfile = function() {
        $('#profile').html("");
    }


    var buildExplore = function() {
        clearProfile();
    	clearExplore();
    	if ($('#explore').hasClass('hidden')) {
    		$('#explore').removeClass('hidden');
    	}
        if ($('.explore-btn-img').hasClass('animated pulse')) {
            $('.explore-btn-img').removeClass('animated pulse');
        }
        Utilities.clearHome();
    }

    var updateExplore = function() {
        alert('your function is working');
       
        clearProfile();
        
        if ($('#explore').hasClass('hidden')) {
            $('#explore').removeClass('hidden');
        }
        if ($('.explore-btn-img').hasClass('animated pulse')) {
            $('.explore-btn-img').removeClass('animated pulse');
        }
    }


    var getProfile = function() {
        var id = $(this).attr('data-bear');
        if ($('.explore-btn-img').is('[data-bear="' + id + '"]')) {
            $(this).find($('.explore-btn-img')).addClass('animated pulse');

        }
        setTimeout(function() {  buildProfile(id); }, 2000);
        //buildProfile(id);  
    }

    var buildProfile = function(id) {
        clearExplore();
        $('#profile-template').tmpl(data.locations[id]).appendTo('#profile');
        if ($('.explore-btn-img').is('[data-bear="' + id + '"]')) {
            alert('this part of the function is working');
            $(this).find($('.explore-btn-img')).addClass('visited');
        }


    }


    var buildHelp = function() {
        if ($('#help').hasClass('hidden')) {
            $('#help').removeClass('hidden').removeClass('fadeOut').addClass('fadeIn');
            $('#weight').addClass('hidden fadeOut');
            $('#diet').addClass('hidden fadeOut');
            $('#cool').addClass('hidden fadeOut');
            $('#live').addClass('hidden fadeOut');
            $('#selfies').addClass('hidden fadeOut');
        }
    }

    var buildWeight = function() {
        if ($('#weight').hasClass('hidden')) {
            $('#weight').removeClass('hidden').removeClass('fadeOut').addClass('fadeIn');
            $('#help').addClass('hidden fadeOut');
            $('#diet').addClass('hidden fadeOut');
            $('#cool').addClass('hidden fadeOut');
            $('#live').addClass('hidden fadeOut');
            $('#selfies').addClass('hidden fadeOut');
        }
    }

    var buildDiet = function() {
        if ($('#diet').hasClass('hidden')) {
            $('#diet').removeClass('hidden').removeClass('fadeOut').addClass('fadeIn');
            $('#help').addClass('hidden fadeOut');
            $('#weight').addClass('hidden fadeOut');
            $('#cool').addClass('hidden fadeOut');
            $('#live').addClass('hidden fadeOut');
            $('#selfies').addClass('hidden fadeOut');
        }
    }

    var buildCool = function() {
        if ($('#cool').hasClass('hidden')) {
            $('#cool').removeClass('hidden').removeClass('fadeOut').addClass('fadeIn');
            $('#help').addClass('hidden fadeOut');
            $('#weight').addClass('hidden fadeOut');
            $('#diet').addClass('hidden fadeOut');
            $('#live').addClass('hidden fadeOut');
            $('#selfies').addClass('hidden fadeOut');
        }
    
    }

    var buildLive = function() {
        if ($('#live').hasClass('hidden')) {
            $('#live').removeClass('hidden').removeClass('fadeOut').addClass('fadeIn');
            $('#help').addClass('hidden fadeOut');
            $('#weight').addClass('hidden fadeOut');
            $('#diet').addClass('hidden fadeOut');
            $('#cool').addClass('hidden fadeOut');
            $('#selfies').addClass('hidden fadeOut');
        }
    
    }

    var buildSelfies = function() {
        if ($('#selfies').hasClass('hidden')) {
            $('#selfies').removeClass('hidden').removeClass('fadeOut').addClass('fadeIn');
            $('#help').addClass('hidden fadeOut');
            $('#weight').addClass('hidden fadeOut');
            $('#diet').addClass('hidden fadeOut');
            $('#cool').addClass('hidden fadeOut');
            $('#live').addClass('hidden fadeOut');
        }
    
    }




     var bindEvents = function() {
        $(document).on('click tap', '.explore-btn[data-bear]', getProfile);
        $(document).on('click tap', '.explore-reset-btn', updateExplore);
        $(document).on('click tap', '#help-btn', buildHelp);
        $(document).on('click tap', '#weight-btn', buildWeight);
        $(document).on('click tap', '#diet-btn', buildDiet);
        $(document).on('click tap', '#cool-btn', buildCool);
        $(document).on('click tap', '#live-btn', buildLive);
        $(document).on('click tap', '#selfies-btn', buildSelfies);

    }


	return {
	        init: init,
	        buildExplore: buildExplore,
            clearProfile: clearProfile,
            clearExplore: clearExplore
	    }


})();