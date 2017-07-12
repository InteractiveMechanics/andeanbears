Explore = (function() {

	 var init = function() {
        bindEvents();
    }

    var clearExplore = function() {
    	$('#explore').html('');
    }


    var buildExplore = function() {
    	clearExplore();
    	if ($('#explore').hasClass('hidden')) {
    		$('#explore').removeClass('hidden');
    	}
        $('#explore-template').tmpl().appendTo('#explore');
        Utilities.clearHome();
    }

     var bindEvents = function() {
       
    }

	return {
	        init: init,
	        buildExplore: buildExplore
	    }


})();