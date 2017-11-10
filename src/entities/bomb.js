class Bomb extends Phaser.Sprite {
	constructor(game, x, y, range, character, explosions) {
		super(game,  0, 0, "bomb");

		this.game = game;
		this.anchor.setTo(0.5, 0.5);

		this.character = character;

		this.explosions = explosions;
		this.hasExploded = false;
		this.isExploding = false;

		this.game.physics.arcade.enable(this);

		this.x = x; 
		this.y = y; 

		let tw = this.game.add.tween(this.scale).to({x: 1.2, y:1.2}, 500, 'Linear', true, 0, -1, true);

		this.game.add.existing(this);

		this.range = range;

		this.interval = setInterval(Bomb.prototype.explode.bind(this), 4000);

	}

	explode(){
		if(!this.isExploding){
			clearInterval(this.interval);
			this.hasExploded = true;
			this.character.freeBomb();
		}
	}

	update(){
		if(this.hasExploded){
			this.hasExploded = false;
			this.isExploding = true;
			this.destroy();
			this.explosions.addExplosion(this.x, this.y, this.range);
		}
	}
}
