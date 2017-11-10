class Bombs extends Phaser.Group {
	constructor(game){
		super(game);
		this.enableBody = true;
	}

	setExplosions(explosions){
		this.explosions = explosions;
	}

	addBomb(x, y, range, character){
		x = (this.game.level.tilesize * Math.floor(x/this.game.level.tilesize)) + (this.game.level.tilesize/2);
		y = (this.game.level.tilesize * Math.floor(y/this.game.level.tilesize)) + (this.game.level.tilesize/2);

		for(let bomb of this.children){
			if(bomb.x == x && bomb.y == y){
				return false;
			}
		}

		this.add(new Bomb(this.game, x, y, range, character, this.explosions));
		return true;
	}
}