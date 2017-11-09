class Bombs extends Phaser.Group {
	constructor(game){
		super(game);
		this.enableBody = true;
	}

	setExplosions(explosions){
		this.explosions = explosions;
	}

	addBomb(x, y, range, character){
		x = (Game.GRID_CELL_SIZE * Math.floor(x/Game.GRID_CELL_SIZE)) + (Game.GRID_CELL_SIZE/2);
		y = (Game.GRID_CELL_SIZE * Math.floor(y/Game.GRID_CELL_SIZE)) + (Game.GRID_CELL_SIZE/2);

		this.add(new Bomb(this.game, x, y, range, character, this.explosions));
	}
}