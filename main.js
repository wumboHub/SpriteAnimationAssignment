var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

//send sprite sheet to asset manager
ASSET_MANAGER.queueDownload("/Users/lj/Pictures/sprites/gaming_marioSNESSheet.png")

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx); // after everything is loaded

	gameEngine.start();
});
