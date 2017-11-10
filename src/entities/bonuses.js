class Bonuses extends Phaser.Group{
	constructor(game){
		super(game);

		this.game.physics.arcade.enable(this);
	}

	generateBonus(x, y){
		let s = Math.random();
		if(s < this.game.bonusDropRate){
			s = Math.random();
			let bonus;
			if(s < 0.5){
			 	bonus = new BonusFire(this.game, x, y);
			}else{
				bonus = new BonusBomb(this.game, x, y);
			}
			this.add(bonus);
		}
	}
}