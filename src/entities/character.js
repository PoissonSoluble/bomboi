class Character extends Phaser.Sprite {

	constructor(game) {
		super(game,  0, 0, "character");

		//this.scale.setTo(0.25);

		this.game = game;

		this.timerBomb = 0;

		this.bombs = new Array(100);
		this.bombsIntervals = new Array(100);
		this.bombPosed = 0;

		this.game.physics.arcade.enable(this);

		this.x = 150; 
		this.y = 150; 

        this.anchor.setTo(0.5, 0.5);

        this.range = 2;

		this.animations.add('down', [0, 1, 2, 3], 10, true);
		this.animations.add('left', [8, 9, 10, 11], 10, true);
		this.animations.add('right', [4, 5, 6, 7], 10, true);
		this.animations.add('up', [12, 13, 14, 15], 10, true);

		this.bombRange = 1;

		this.game.add.existing(this);
	}

	hasBomb(){
		return bombPosed != 0;
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
			this.bombs[this.bombPosed] = new Bomb(this.game, (100*Math.floor(this.x/100)) + 50, (100*Math.floor(this.y/100)) + 50, this.range);
			this.timerBomb = 120;
			this.bombPosed++;
		}

		for(var i = 0; i < 100; i++) {
			if(this.bombs[i] != null && this.bombs[i].isFinished()){
				this.bombs[i] = null;
				this.bombPosed--;
			}
		}
	}
}
