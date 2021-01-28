class myMario {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, {game, x, y, spritesheet});
        this.game.mario = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/gaming_marioSNESSheet.png");

        this.animations = [];
        // sprites added
        this.animations[0] = new Animator(this.spritesheet, 8, 76, 16, 32, 2, 0.5, 24, false, false);
        this.animations[1] = new Animator(this.spritesheet, 88, 76, 16, 32, 1, 0.5, 24, false, false);
        this.animations[2] = new Animator(this.spritesheet, 328, 76, 16, 32, 2, 0.5, 24, false, false);
        this.animations[3] = new Animator(this.spritesheet, 248, 76, 16, 32, 1, 0.5, 24, false, true);
    }

    draw(ctx) {
        ctx.fillStyle = "White";
        ctx.strokeStyle = "Red";
        // ctx.strokeRect(100, 110, 100, 100);
        // if (step == 0) {
        //     this.animations[0].drawFrame(this.game.clockTick, ctx, this.x /* - this.game.camera.x */, this.y, 1); //camera.x == scrolling
        //     step++;
        // } else {
        //     this.animations[1].drawFrame(this.game.clockTick, ctx, this.x /* - this.game.camera.x*/, this.y, 1);
        //     step--;
        // }
        
        // if this.animation
        var frames = this.animations[0].frames;
        this.animations[0].drawFrame(this.game.clockTick, ctx, 0, 0, 8); 
    }

    update() {
       
    }

    //loadAnimations()
}