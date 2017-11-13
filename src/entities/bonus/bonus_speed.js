class BonusSpeed extends Bonus{
	constructor(game, x, y){
		super(game, x, y, "bonus_speed");
	}

	affect(player){
		player.raiseSpeed();
	}
}