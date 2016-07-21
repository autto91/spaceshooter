/// <reference path="./GameObject.ts" />
/// <reference path="./Player.ts" />


class SpaceShooter {

   game:Phaser.Game;
   player:Player;

   constructor() {
       this.game = new Phaser.Game(1024, 768, Phaser.AUTO, '', {
           preload: this.preload, create: this.create, update: this.update
       });
       this.player = new Player(this.game);
   }

   preload() {
       this.game.world.setBounds(0, 0, 1024, 768);
       this.player.preload();
   }

   create() {
       this.player.create();
   }

   update() {
       this.player.update();
   }
}

window.onload = () => {
    var game = new SpaceShooter();
}