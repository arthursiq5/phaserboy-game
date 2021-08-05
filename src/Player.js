export default class Player {
    constructor(game)
    {
        this.game = game;
        this.player = null;
    }

    create()
    {
        this.player = this.game.physics.add.sprite(100, 450, 'dude');

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.game.anims.create({
            key: 'left',
            frames: this.game.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.game.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.game.anims.create({
            key: 'right',
            frames: this.game.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }

    addCollider(obj)
    {
        this.game.physics.add.collider(this.player, obj);
    }
}