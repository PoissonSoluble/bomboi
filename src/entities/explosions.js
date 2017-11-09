class Explosions extends Phaser.Group {
	constructor(game, boulders, walls){
		super(game);

		this.boulders = boulders;
		this.walls = walls;

		this.game.physics.arcade.enable(this);
	}

	addExplosion(x, y, range){
		this.add(new Explosion(this.game, x, y, range, this.boulders, this.walls));
	}

	getAllChildren() {
		let res=[]
		for(let g of this.children) {
			res = res.concat(g.children)
		}
		return res;
	}
}