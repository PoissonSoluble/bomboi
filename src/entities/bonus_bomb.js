class BonusBomb extends Phaser.Sprite{
	constructor(game, x, y){
		super(game, 0, 0, "bonus_bomb");

		this.x = x; 
		this.y = y; 

		this.anchor.setTo(0.5);
		
		this.game.physics.arcade.enable(this);
	}

	affect(player){
		player.raiseBombCapacity();
	}
}