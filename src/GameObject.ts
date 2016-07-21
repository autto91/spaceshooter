export abstract class GameObject {
    sprite: Phaser.Sprite;
    physicsGroup: Phaser.Group;
    game: Phaser.Game;
    spriteImage: string = 'CHANGE_ME';
    spriteReference: string = 'ALSO_CHANGE_ME';
    speed: number = 0;
    startX: number = 0;
    startY: number = 0;
    constructor (game: Phaser.Game) {
        this.game = game;
    }

    preload () {
        this.game.load.image(this.spriteReference, this.spriteImage);
        this.physicsGroup = this.game.add.group();
        this.physicsGroup.enableBody = true;
        this.physicsGroup.physicsBodyType = Phaser.Physics.ARCADE;
    }

    create () {
        this.sprite = this.game.add.sprite(this.startX, this.startY, this.spriteReference);
        this.sprite.anchor.setTo(0.5, 0.5);
        this.physicsGroup.add(this.sprite);
    }
}
