class Boulders extends Phaser.Group {

	constructor(game, walls, floor) {
		super(game);
		this.game = game;
		this.enableBody = true;

		for(var i = 0; i < this.game.level.width; i++){
			for(var j = 0; j < this.game.level.width; j++){

				let x = (this.game.level.tilesize * i) + (this.game.level.tilesize / 2);
				let y = (this.game.level.tilesize * j) + (this.game.level.tilesize / 2);

				if(!walls.isWall(x,y) && !floor.isBoulderFree(x,y)){
					let s = Math.random()
					if(s > 0.25){

						let boulder = new Phaser.Sprite(this.game, x, y, 'boulder');
						boulder.anchor.setTo(0.5);
						this.game.physics.arcade.enable(boulder);
						boulder.body.immovable = true;
						this.add(boulder);

					}
				}
			}
		}
	}

	isBoulder(x,y){
		for(let boulder of this.children){
			if (boulder.x == x && boulder.y == y){
				return true;
			}
		}
		return false;
	}
}
