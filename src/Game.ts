class SpaceShooter
{
   game:Phaser.Game;
   player:Phaser.Sprite; 
   upKey:Phaser.Key; 
   downKey:Phaser.Key; 
   leftKey:Phaser.Key;
   rightKey:Phaser.Key; 
   speed:number;

   constructor() {
       this.game = new Phaser.Game(1024, 768, Phaser.AUTO, '', {
           preload: this.preload, create: this.create, update: this.update
       });
   }

   preload() {
       this.game.load.image('playerShip', 'assets/PlayerShip.png');
       this.game.world.setBounds(0, 0, 1024, 768);
       this.speed = 5;
       this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
       this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
       this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
       this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
   }

   create() {
       this.player = this.game.add.sprite(500, 500, 'playerShip');
       this.player.anchor.setTo(0.5, 0.5);
   }

   update() {
       this.player.rotation = this.game.physics.arcade.angleToPointer(this.player);
       if (this.upKey.isDown) {
           this.player.y -= this.speed;
       }
       if (this.downKey.isDown) {
           this.player.y += this.speed;
       }
       if (this.leftKey.isDown) {
           this.player.x -= this.speed;
       }
       if (this.rightKey.isDown) {
           this.player.x += this.speed;
       }
   }
}

window.onload = () => {
    var game = new SpaceShooter();
}