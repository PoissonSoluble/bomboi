class Explosion extends Phaser.Group {

	constructor(game, x, y, range) {
		super(game);
		this.game = game;
		this.explosionFinished = false;


		let center = new ExplosionCenter(this.game, x, y);
		let left = new ExplosionLeftEdge(this.game, x-(range*100), y);
		let right = new ExplosionRightEdge(this.game, x+(range*100), y);
		let down = new ExplosionDownEdge(this.game, x, y+(range*100));
		let up = new ExplosionUpEdge(this.game, x, y-(range*100));

		this.add(center);
		this.add(left);
		this.add(right);
		this.add(down);
		this.add(up);

		for(var i = 1; i < range; i++){
			let horizontalLeft = new ExplosionHorizontal(this.game, x-(i*100), y);
			let horizontalRight = new ExplosionHorizontal(this.game, x+(i*100), y);
			let verticalUp = new ExplosionVertical(this.game, x, y-(i*100));
			let verticalDown = new ExplosionVertical(this.game, x, y+(i*100));

			this.add(horizontalLeft);
			this.add(horizontalRight);
			this.add(verticalUp);
			this.add(verticalDown);
		}

		this.interval = setInterval(Explosion.prototype.stopExplosion.bind(this), 1000);
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
