class Boulders extends Phaser.Group {

	isCorner(i,j){
		return ((i <= 2 || i >= 16) && j == 1) || (i == 1 && (j <= 2|| j >= 16)) || (i == 17 && (j <= 2|| j >= 16)) || ((i <= 2 || i >= 16) && j == 17)
	}
	isWall(i, j){
		return i == 0 || i == 18 || j == 0 || j == 18 || (i%2 == 0 && j%2 == 0)
	}

	constructor(game) {
		super(game);
		this.game = game;
		this.enableBody = true;

		for(var i = 0; i < 19; i++){
			for(var j = 0; j < 19; j++){
				if(!this.isWall(i,j) && !this.isCorner(i,j)){
					let s = Math.random()
					if(s > 0.25){
						let x = (this.game.width / 19) * i + 50;
						let y = (this.game.height / 19) * j + 50;
						let boulder = new Phaser.Sprite(this.game, x, y, 'boulder');
						//wall.scale.setTo(.25);
						boulder.anchor.setTo(0.5, 0.5);
						this.game.physics.enable(boulder, Phaser.Physics.ARCADE)
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
