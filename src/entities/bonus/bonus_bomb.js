class BonusBomb extends Bonus{
	constructor(game, x, y){
		super(game, x, y, "bonus_bomb");
	}

	affect(player){
		player.raiseBombCapacity();
	}
}