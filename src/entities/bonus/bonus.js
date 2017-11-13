class Bonus extends Phaser.Sprite{
	constructor(game, x, y, name){
		super(game, 0, 0, name);

		this.x = x; 
		this.y = y; 

		this.destroyable = false;

		this.anchor.setTo(0.5);
		
		this.game.physics.arcade.enable(this);

		this.interval = setInterval(Bonus.prototype.makeDestroyable.bind(this), 1050);
	}


	makeDestroyable(){
		this.destroyable = true;
		clearInterval(this.interval);
	}

	isDestroyable(){
		return this.destroyable;
	}

}