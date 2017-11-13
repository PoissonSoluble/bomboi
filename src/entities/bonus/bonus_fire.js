class BonusFire extends Bonus{
	constructor(game, x, y){
		super(game, x, y, "bonus_fire");
	}

	affect(player){
		player.raiseRange();
	}
}