class Bomb extends Phaser.Sprite {
	constructor(game, x, y, range) {
		super(game,  0, 0, "bomb");

		//this.scale.setTo(0.25);

		this.game = game;
		this.anchor.setTo(0.5, 0.5);

		this.hasExploded = false;
		this.isExploding = false;

		this.game.physics.arcade.enable(this);

		this.x = x; 
		this.y = y; 

		let tw = this.game.add.tween(this.scale).to({x: 1.2, y:1.2}, this.game.rnd.integerInRange(1000,2000), 'Linear', true, 0, -1, true);

		this.game.add.existing(this);

		this.range = range;

		this.interval = setInterval(Bomb.prototype.explode.bind(this), 4000);

	}

	explode(){
		this.hasExploded = true;
		clearInterval(this.interval);
	}

	explosionCollidesWith(x,y){
		if(this.explosion == null){
			return false;
		}
		return this.explosion.collidesWith(x,y);
	}

	isFinished(){
		if(this.explosion == null){
			return false;
		}

		return this.explosion.isFinished();
	}

	update(){
		if(this.hasExploded){
			this.kill();
			this.hasExploded = false;
			this.isExploding = true;
			this.explosion = new Explosion(this.game, this.x, this.y, this.range);
		}
	}
}