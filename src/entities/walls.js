class Walls extends Phaser.Group {

	constructor(game) {
		super(game);
		this.game = game;
		this.enableBody = true;

		for(var i = 0; i < this.game.level.width; i++){
			for(var j = 0; j < this.game.level.height; j++){

				let index = i * this.game.level.width + j;

				if(this.game.level.data[index] == 1){

					let x = (this.game.level.tilesize * i) + (this.game.level.tilesize / 2);
					let y = (this.game.level.tilesize * j) + (this.game.level.tilesize / 2);
					let wall = new Phaser.Sprite(this.game, x, y,'wall');
					wall.anchor.setTo(0.5);
					this.game.physics.arcade.enable(wall);
					wall.body.immovable = true;
					this.add(wall);

				}
			}
		}
	}

	isWall(x,y){
		for(let wall of this.children){
			if (wall.x == x && wall.y == y){
				return true;
			}
		}
		return false;
	}
}
