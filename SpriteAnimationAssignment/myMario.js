class Mario {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, {game, x, y, spritesheet});
        
        this.game.mario = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/gaming_marioSNESSheet.png");
        

        this.animations = [];
        this.animations[0] = new Animator(this.spritesheet, 48, 0, 16, 20, 2, 0.5, 167, false, true);
        this.animations[1] = new Animator(this.spritesheet, 168, 0, 16, 20, 2, 0.5, 167, false, true);
    }

    draw(ctx) {
        ctx.fillStyle = "White";
        ctx.strokeStyle = "Red";
        var step = 0;
        // ctx.strokeRect(100, 110, 100, 100);
        if (step == 0) {
            this.animations[0].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
            step++;
        } else {
            this.animations[1].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
            step--;
        }
        
        this.animation.drawFrame(this.game.clockTick, ctx, 0, 0, 3); 
    }

    loadAnimations()
}