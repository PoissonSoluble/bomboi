class Explosion extends Phaser.Group {

	constructor(game, x, y, range) {
		super(game);
		this.game = game;
		this.explosionFinished = false;

		this.range = range;

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

		for(var i = Game.GRID_CELL_SIZE; i < this.range*Game.GRID_CELL_SIZE; i+=Game.GRID_CELL_SIZE){
			stopLeft = this.createIntermediarySprite(stopLeft, x-i, y, 1);
			stopRight = this.createIntermediarySprite(stopRight, x+i, y, 1);
			stopUp = this.createIntermediarySprite(stopUp, x, y-i, 2);
			stopDown = this.createIntermediarySprite(stopDown, x, y+i, 2);
		}

		if(!stopLeft && !Walls.isWall(Utils.xyToGridPosition(x-(this.range*Game.GRID_CELL_SIZE)), Utils.xyToGridPosition(y))){
			let left = new ExplosionLeftEdge(this.game, x-(this.range*Game.GRID_CELL_SIZE), y);
			this.add(left);
		}
		if(!stopRight && !Walls.isWall(Utils.xyToGridPosition(x+(this.range*Game.GRID_CELL_SIZE)), Utils.xyToGridPosition(y))){
			let right = new ExplosionRightEdge(this.game, x+(this.range*Game.GRID_CELL_SIZE), y);
			this.add(right);
		}
		if(!stopDown && !Walls.isWall(Utils.xyToGridPosition(x), Utils.xyToGridPosition(y+(this.range*Game.GRID_CELL_SIZE)))) {
			let down = new ExplosionDownEdge(this.game, x, y+(this.range*Game.GRID_CELL_SIZE));
			this.add(down);
		}
		if(!stopUp && !Walls.isWall(Utils.xyToGridPosition(x), Utils.xyToGridPosition(y-(this.range*Game.GRID_CELL_SIZE)))) {
			let up = new ExplosionUpEdge(this.game, x, y-(this.range*Game.GRID_CELL_SIZE));
			this.add(up);
		}
	}

	/**
	 * Orientation -> 1 = horizontal
	 *             -> 2 = vertical 
	 */
	createIntermediarySprite(stop, x, y, orientation){
		if(!stop && !Walls.isWall(Utils.xyToGridPosition(x), Utils.xyToGridPosition(y))){
			let sprite = orientation == 1 ? new ExplosionHorizontal(this.game, x, y) : new ExplosionVertical(this.game, x, y);
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

	collidesWith(x,y){
		let collides = false;
		this.forEach(function(item) {
			if(item.collidesWith(x,y)){
				collides = true;
				return;
			}
		});
		return collides;
	}

	update(){

		if(this.explosionFinished){
			this.kill();
		}
		this.forEach(function(item) {
			item.update();
		});
	}
}
