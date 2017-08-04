Explore = (function() {

	 var init = function() {
        bindEvents();
    }

    var clearExplore = function() {
    	$('#explore').addClass('hidden');
    }

    var clearProfile = function() {
        $('#profile').html("").addClass('hidden');
    }

    var clearBtnAnimation = function() {
         if ($('.explore-btn-img').hasClass('animated pulse')) {
            $('.explore-btn-img').removeClass('animated pulse');
        }
    }

    var showExplore = function() {
        if ($('#explore').hasClass('hidden')) {
            $('#explore').removeClass('hidden');
            $('.explore-btn').attr("disabled", false);

        }
    }

    var buildExplore = function() {
        clearProfile();
    	clearExplore();
    	showExplore();
        clearBtnAnimation();
        Utilities.clearHome();
    }

    var updateExplore = function() {
        var id = $('h1').attr('data-bear');
        alert(id);
        if ($('.explore-btn-img').is('[data-bear="' + id + '"]')) {
            $('.explore-btn-img[data-bear="' + id + '"]').addClass('visited');

        }
        clearProfile();
        clearBtnAnimation();
        showExplore();
       
    }


    var getProfile = function() {
        var id = $(this).attr('data-bear');
        if ($('.explore-btn-img').is('[data-bear="' + id + '"]')) {
            $(this).find($('.explore-btn-img')).addClass('animated pulse');

        }
        $('.explore-btn').attr("disabled", true);
        setTimeout(function() {  buildProfile(id); }, 2000);
        //buildProfile(id);  
    }

    var buildProfile = function(id) {
        clearExplore();
        $('#profile-template').tmpl(data.locations[id]).appendTo('#profile');
        $('#profile').removeClass('hidden');
        $('#landing').removeClass('hidden').addClass('animated fadeIn');
    }

    var animateHelp = function() {
        if ($('#help-btn').hasClass('animated pulse')) {
            $('#help-btn').removeClass('animated pulse');
        }
        $('#help-btn').addClass('animated pulse active');
    }

    var buildHelp = function() {
        animateHelp();
        if ($('#help').hasClass('hidden')) {
            $('#help').removeClass('hidden').removeClass('fadeOut').addClass('fadeIn');
            $('#landing').addClass('hidden fadeOut');
            $('#weight').addClass('hidden fadeOut');
            $('#weight-btn').removeClass('animated pulse active');
            $('#diet').addClass('hidden fadeOut');
            $('#diet-btn').removeClass('animated pulse active');
            $('#cool').addClass('hidden fadeOut');
            $('#cool-btn').removeClass('animated pulse active');
            $('#live').addClass('hidden fadeOut');
            $('#live-btn').removeClass('animated pulse active');
            $('#selfies').addClass('hidden fadeOut');
            $('#selfies-btn').removeClass('animated pulse active');
            
        }
    }

    var animateWeight = function() {
        if ($('#weight-btn').hasClass('animated pulse')) {
            $('#weight-btn').removeClass('animated pulse');
        }
        $('#weight-btn').addClass('animated pulse active');
    }

    var buildWeight = function() {
        animateWeight();
        if ($('#weight').hasClass('hidden')) {
            $('#weight').removeClass('hidden').removeClass('fadeOut').addClass('fadeIn');
            $('#landing').addClass('hidden fadeOut');
            $('#help').addClass('hidden fadeOut');
            $('#help-btn').removeClass('animated pulse active');
            $('#diet').addClass('hidden fadeOut');
            $('#diet-btn').removeClass('animated pulse active');
            $('#cool').addClass('hidden fadeOut');
            $('#cool-btn').removeClass('animated pulse active');
            $('#live').addClass('hidden fadeOut');
            $('#live-btn').removeClass('animated pulse active');
            $('#selfies').addClass('hidden fadeOut');
            $('#selfies-btn').removeClass('animated pulse active');
           
        }
    }

    var animateDiet = function() {
        if ($('#diet-btn').hasClass('animated pulse')) {
            $('#diet-btn').removeClass('animated pulse');
        }
        $('#diet-btn').addClass('animated pulse active');
    }

    var buildDiet = function() {
        animateDiet();
        if ($('#diet').hasClass('hidden')) {
            $('#diet').removeClass('hidden').removeClass('fadeOut').addClass('fadeIn');
            $('#landing').addClass('hidden fadeOut');
            $('#help').addClass('hidden fadeOut');
            $('#help-btn').removeClass('animated pulse active');
            $('#weight').addClass('hidden fadeOut');
            $('#weight-btn').removeClass('animated pulse active');
            $('#cool').addClass('hidden fadeOut');
            $('#cool-btn').removeClass('animated pulse active');
            $('#live').addClass('hidden fadeOut');
            $('#live-btn').removeClass('animated pulse active');
            $('#selfies').addClass('hidden fadeOut');
            $('#selfies-btn').removeClass('animated pulse active');
        }
    }

    var animateCool = function() {
        if ($('#cool-btn').hasClass('animated pulse')) {
            $('#cool-btn').removeClass('animated pulse');
        }
        $('#cool-btn').addClass('animated pulse active');
    }

    var buildCool = function() {
        animateCool();
        if ($('#cool').hasClass('hidden')) {
            $('#cool').removeClass('hidden').removeClass('fadeOut').addClass('fadeIn');
            $('#landing').addClass('hidden fadeOut');
            $('#help').addClass('hidden fadeOut');
            $('#help-btn').removeClass('animated pulse active');
            $('#weight').addClass('hidden fadeOut');
            $('#weight-btn').removeClass('animated pulse active');
            $('#diet').addClass('hidden fadeOut');
            $('#diet-btn').removeClass('animated pulse active');
            $('#live').addClass('hidden fadeOut');
            $('#live-btn').removeClass('animated pulse active');
            $('#selfies').addClass('hidden fadeOut');
            $('#selfies-btn').removeClass('animated pulse active');
        }
    
    }

    var animateLive = function() {
        if ($('#live-btn').hasClass('animated pulse')) {
            $('#live-btn').removeClass('animated pulse');
        }
        $('#live-btn').addClass('animated pulse active');
    }

    var buildLive = function() {
        animateLive();
        if ($('#live').hasClass('hidden')) {
            $('#live').removeClass('hidden').removeClass('fadeOut').addClass('fadeIn');
            $('#landing').addClass('hidden fadeOut');
            $('#help').addClass('hidden fadeOut');
            $('#help-btn').removeClass('animated pulse active');
            $('#weight').addClass('hidden fadeOut');
            $('#weight-btn').removeClass('animated pulse active');
            $('#diet').addClass('hidden fadeOut');
            $('#diet-btn').removeClass('animated pulse active');
            $('#cool').addClass('hidden fadeOut');
            $('#cool-btn').removeClass('animated pulse active');
            $('#selfies').addClass('hidden fadeOut');
            $('#selfies-btn').removeClass('animated pulse active');
        }
    
    }

    var animateSelfies = function() {
        if ($('#selfies-btn').hasClass('animated pulse')) {
            $('#selfies-btn').removeClass('animated pulse');
        }
        $('#selfies-btn').addClass('animated pulse active');
    }


    var buildSelfies = function() {
        animateSelfies();
        if ($('#selfies').hasClass('hidden')) {
            $('#selfies').removeClass('hidden').removeClass('fadeOut').addClass('fadeIn');
            $('#landing').addClass('hidden fadeOut');
            $('#help').addClass('hidden fadeOut');
            $('#help-btn').removeClass('animated pulse active');
            $('#weight').addClass('hidden fadeOut');
            $('#weight-btn').removeClass('animated pulse active');
            $('#diet').addClass('hidden fadeOut');
            $('#diet-btn').removeClass('animated pulse active');
            $('#cool').addClass('hidden fadeOut');
            $('#cool-btn').removeClass('animated pulse active');
            $('#live').addClass('hidden fadeOut');
            $('#live-btn').removeClass('animated pulse active');
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