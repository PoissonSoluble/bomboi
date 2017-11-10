class Explosion extends Phaser.Group {

	constructor(game, x, y, range, boulders, walls) {
		super(game);
		this.game = game;
		this.explosionFinished = false;

		this.range = range * this.game.level.tilesize;
		this.boulders = boulders;
		this.walls = walls;

		this.createSprites(x, y);

		this.interval = setInterval(Explosion.prototype.stopExplosion.bind(this), 1000);
	}

	createSprites(x, y){
		let stopLeft = false;
		let stopRight = false;
		let stopDown = false;
		let stopUp = false;

		let center = new ExplosionCenter(this.game, x, y);

		this.add(center);

		for(var i = this.game.level.tilesize; i < this.range; i+=this.game.level.tilesize){
			stopLeft = this.createIntermediarySprite(stopLeft, x-i, y, 1);
			stopRight = this.createIntermediarySprite(stopRight, x+i, y, 2);
			stopUp = this.createIntermediarySprite(stopUp, x, y-i, 3);
			stopDown = this.createIntermediarySprite(stopDown, x, y+i, 4);
		}

		if(!stopLeft && !this.walls.isWall(x-(this.range), y)){
			let left = new ExplosionLeftEdge(this.game, x-(this.range), y);
			this.add(left);
		}
		if(!stopRight && !this.walls.isWall(x+(this.range), y)){
			let right = new ExplosionRightEdge(this.game, x+(this.range), y);
			this.add(right);
		}
		if(!stopDown && !this.walls.isWall(x, y+(this.range))) {
			let down = new ExplosionDownEdge(this.game, x, y+(this.range));
			this.add(down);
		}
		if(!stopUp && !this.walls.isWall(x, y-(this.range))) {
			let up = new ExplosionUpEdge(this.game, x, y-(this.range));
			this.add(up);
		}
	}

	/**
	 * Orientation -> 1 = left
	 *             -> 2 = right
	 *             -> 3 = up
	 *             -> 4 = down 
	 */
	createIntermediarySprite(stop, x, y, direction){
		let sprite;
		if(!stop && this.boulders.isBoulder(x,y)){
			switch(direction){
				case 1:
					sprite = new ExplosionLeftEdge(this.game, x, y);
					break;
				case 2:
					sprite = new ExplosionRightEdge(this.game, x, y);
					break;
				case 3:
					sprite = new ExplosionUpEdge(this.game, x, y);
					break;
				case 4:
					sprite = new ExplosionDownEdge(this.game, x, y);
					break;
			}
			this.add(sprite);
			return true;
		}
		if(!stop && !this.walls.isWall(x, y)){
			sprite = direction == 1 || direction == 2 ? new ExplosionHorizontal(this.game, x, y) : new ExplosionVertical(this.game, x, y);
			this.add(sprite);
			return false
		}
		else{
			return true;
		}
	}

	isFinished(){
		return this.explosionFinished;
	}

	stopExplosion(){
		this.explosionFinished = true;
		clearInterval(this.interval);
	}

	update(){
		if(this.explosionFinished){
			this.destroy();
		}
		this.forEach(function(item) {
			item.update();
		});
	}
}
