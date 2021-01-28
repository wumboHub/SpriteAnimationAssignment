var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

//send sprite sheet to asset manager
ASSET_MANAGER.queueDownload("./sprites/gaming_marioSNESSheet.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx); // after everything is loaded

	gameEngine.addEntity(new myMario(gameEngine, 100, 50, ASSET_MANAGER.getAsset("./sprites/gaming_marioSNESSheet.png")));

	gameEngine.start();
});
