class Explosions extends Phaser.Group {
	constructor(game){
		super(game);

		this.game.physics.arcade.enable(this);
	}

	addExplosion(x, y, range){
		x = (Game.GRID_CELL_SIZE * Math.floor(x/Game.GRID_CELL_SIZE)) + (Game.GRID_CELL_SIZE/2);
		y = (Game.GRID_CELL_SIZE * Math.floor(y/Game.GRID_CELL_SIZE)) + (Game.GRID_CELL_SIZE/2);

		this.add(new Explosion(this.game, this.x, this.y, this.range));
	}

	getAllChildren() {
		let res=[]
		for(let g of this.children) {
			res = res.concat(g.children)
		}
		return res;
	}
}