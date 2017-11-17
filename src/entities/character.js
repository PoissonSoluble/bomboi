let initialSpeed = 150;
let speedIncreaseRate = 0.2;

class Character extends Phaser.Sprite {

	constructor(game, player, bombs, input) {
		super(game,  0, 0, "character" + player);

		this.game = game;

		this.dead = false;

		this.bombPosed = 0;

		this.player = player;
		this.input = input;
		this.bombs = bombs;

		this.game.physics.arcade.enable(this);
		this.body.setSize(66,81.5,1,3);

		this.x = this.game.level.starts[player-1].x; 
		this.y = this.game.level.starts[player-1].y; 

		this.speed = initialSpeed;

		this.anchor.setTo(0.5);

		this.range = 1;
		this.maxBombs = 1;

		this.animations.add('down', [0, 1, 2, 3], 10, true);
		this.animations.add('left', [8, 9, 10, 11], 10, true);
		this.animations.add('right', [4, 5, 6, 7], 10, true);
		this.animations.add('up', [12, 13, 14, 15], 10, true);

		this.game.add.existing(this);
	}

	update(){
		if(!this.dead){
			let keyboard = this.game.input.keyboard;
			let move = false;
			//  Reset the thiss velocity (movement)
			this.body.velocity.x = 0;
			this.body.velocity.y = 0;

			if (keyboard.isDown(this.input.left))
			{
				//  Move to the left
				this.body.velocity.x = -this.speed;

				this.animations.play('left');
				move = true;
			}
			else if (keyboard.isDown(this.input.right))
			{
				//  Move to the right
				this.body.velocity.x = this.speed;

				this.animations.play('right');
				move = true;
			}

			if (keyboard.isDown(this.input.down))
			{
				//  Move to the right
				this.body.velocity.y = this.speed;

				if(!move){this.animations.play('down');}
				move = true;
			}
			else if (keyboard.isDown(this.input.up))
			{
				//  Move to the right
				this.body.velocity.y = -this.speed;

				if(!move){this.animations.play('up');}
				move = true;
			}

			if(!move)
			{
				//  Stand still
				this.animations.stop();

				this.frame = 1;
			}

			if(keyboard.isDown(this.input.bomb) && this.bombPosed < this.maxBombs)
			{
				if(this.bombs.addBomb(this.x, this.y, this.range, this)){
					this.bombPosed++;
				}
			}
		}
	}

	die(){
		this.dead = true;
		this.kill();
	}

	isDead(){
		return this.dead;
	}

	freeBomb(){
		this.bombPosed--;
	}

	raiseRange(){
		this.range++;
	}

	raiseSpeed(){
		this.speed += speedIncreaseRate * initialSpeed;
	}

	raiseBombCapacity(){
		this.maxBombs++;
	}
}
