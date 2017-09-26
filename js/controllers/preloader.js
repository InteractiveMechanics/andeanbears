Preloader = (function() {
    var preload;
    var assets = new Array();

    var init = function() {
        preload = new createjs.LoadQueue(false);
        preload.on('fileload', handleFileLoad);
        preload.on('progress', handleLoadComplete);
        preload.setMaxConnections(5);
        buildAssetsArray();
        loadAll();
    }

    var buildAssetsArray = function() {
        assets = JSON.search(data, '//bears/Video');
    }
    var loadAll = function() {
        while (assets.length > 0) {
            var item = assets.shift();
            preload.loadFile(item);
        }
    }
    var handleFileLoad = function(event) {
        $('#hidden').append(event.result);
    }
    var handleLoadComplete = function(event) {
        if (preload.progress == 1) {
            console.log('Done preloading.');            
        }
    }

    return {
        init: init
    }
})();