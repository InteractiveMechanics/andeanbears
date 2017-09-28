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
        var videos = JSON.search(data, '//bears/Video');
        var bgs = JSON.search(data, '//bears/Background');
        var posters = JSON.search(data, '//bears/Videoposter');
        var images = JSON.search(data, '//bears/Selfie/image');
        var thumbs = JSON.search(data, '//bears/Selfie/thumb');
        var other = [
            'assets/home/homepg-bkgr-text.jpg',
            'assets/explore/Background.jpg',
            'assets/game/BC-bkgr-map-w-bar.jpg',
            'assets/game/BC-complete-full.png'
        ];

        assets = videos.concat(bgs, posters, images, thumbs, other);
        //console.log(assets);
    }
    var loadAll = function() {
        while (assets.length > 0) {
            var item = assets.shift();
            preload.loadFile(item);
        }
        //console.log(assets);
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