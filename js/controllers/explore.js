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
        Utilities.clearHome();
    }

    var getProfile = function() {
        var id = $(this).attr('data-bear');
        buildProfile(id);  
    }

    var buildProfile = function(id) {
        clearExplore();
        $('#profile-template').tmpl(data.locations[id]).appendTo('#profile'); 

    }

    var buildHelp = function() {
        if (!$('#help').hasClass('hidden')) {
            $('#help').removeClass('hidden');
        }
    }

     var bindEvents = function() {
        $(document).on('click tap', '.explore-btn[data-bear]', getProfile);
        $(document).on('click tap', '#help', buildHelp);
       
    }



	return {
	        init: init,
	        buildExplore: buildExplore,
            clearProfile: clearProfile,
            clearExplore: clearExplore
	    }


})();