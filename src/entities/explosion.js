class Explosion extends Phaser.Group {

	constructor(game, x, y, range, boulders) {
		super(game);
		this.game = game;
		this.explosionFinished = false;

		this.range = range;
		this.boulders = boulders;

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
			stopRight = this.createIntermediarySprite(stopRight, x+i, y, 2);
			stopUp = this.createIntermediarySprite(stopUp, x, y-i, 3);
			stopDown = this.createIntermediarySprite(stopDown, x, y+i, 4);
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
		if(!stop && !Walls.isWall(Utils.xyToGridPosition(x), Utils.xyToGridPosition(y))){
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
			this.kill();
		}
		this.forEach(function(item) {
			item.update();
		});
	}
}
