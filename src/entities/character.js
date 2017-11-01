class Character extends Phaser.Sprite {

	constructor(game, player, bombManager) {
		super(game,  0, 0, "character");

		this.game = game;

		this.timerBomb = 0;

		this.bombPosed = 0;

		this.player = player;
		this.bombManager = bombManager;

		this.game.physics.arcade.enable(this);

		this.x = 150; 
		this.y = 150; 

        this.anchor.setTo(0.5, 0.5);

        this.range = 2;

		this.animations.add('down', [0, 1, 2, 3], 10, true);
		this.animations.add('left', [8, 9, 10, 11], 10, true);
		this.animations.add('right', [4, 5, 6, 7], 10, true);
		this.animations.add('up', [12, 13, 14, 15], 10, true);

		this.game.add.existing(this);
	}

	bombTouches(x,y){
		for(var i = 0; i < 100; i++) {
			if(this.bombs[i] != null){
				if(this.bombs[i].explosionCollidesWith(x,y)){
					return true;
				}
			}
		}
		return false;
	}

	update(){
		var cursors = this.game.input.keyboard.createCursorKeys();
		//  Reset the thiss velocity (movement)
		this.body.velocity.x = 0;
		this.body.velocity.y = 0;

		if(this.timerBomb != 0){
			this.timerBomb--;
		}

		if (cursors.left.isDown)
		{
			//  Move to the left
			this.body.velocity.x = -150;

			this.animations.play('left');
		}
		else if (cursors.right.isDown)
		{
			//  Move to the right
			this.body.velocity.x = 150;

			this.animations.play('right');
		}
		else if (cursors.down.isDown)
		{
			//  Move to the right
			this.body.velocity.y = 150;

			this.animations.play('down');
		}
		else if (cursors.up.isDown)
		{
			//  Move to the right
			this.body.velocity.y = -150;

			this.animations.play('up');
		}
		else
		{
			//  Stand still
			this.animations.stop();

			this.frame = 1;
		}

		if(this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR) && this.timerBomb == 0)
		{
			this.bombManager.poseBomb(this.player, this.x, this.y, this.bombPosed, this.range)
			this.timerBomb = 120;
			this.bombPosed++;
		}
		
		this.bombPosed -= this.bombManager.bombFinished(this.player);
	}
}
