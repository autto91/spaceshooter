class SpaceShooter
{
   game:Phaser.Game;

   constructor() {
       this.game = new Phaser.Game(1024, 768, Phaser.AUTO, '', {
           preload: this.preload, create: this.create, update: this.update
       });
   }

   preload() {
       this.game.load.image('playerShip', 'assets/PlayerShip.png');
   }

   create() {
       var player = this.game.add.sprite(500, 500, 'playerShip');
   }

   update() {
   }
}

window.onload = () => {
    var game = new SpaceShooter();
}