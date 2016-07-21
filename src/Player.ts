/// <reference path="./GameObject.ts" />


class Player extends GameObject {
    
    constructor (game: Phaser.Game) {
        super(game);
        this.spriteImage = 'assets/PlayerShip.png';
        this.spriteReference = 'playerShip';
        this.startX = 500;
        this.startY = 500;
        this.speed = 3;
    }

    runControls () {
        let upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        let downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        let rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        let leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);

        if (upKey.isDown) {
            this.sprite.y -= this.speed;
        }
        if (downKey.isDown) {
            this.sprite.y += this.speed;
        }
        if (leftKey.isDown) {
            this.sprite.x -= this.speed;
        }
        if (rightKey.isDown) {
            this.sprite.x += this.speed;
        }
    }

    update () {
        this.sprite.rotation = this.game.physics.arcade.angleToPointer(this.sprite);
        this.runControls();
    }
}