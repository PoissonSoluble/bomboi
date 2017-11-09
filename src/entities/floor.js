class Floor extends Phaser.Group {

	constructor(game) {
		super(game);
		this.game = game;

		for(var i = 0; i < this.game.level.width; i++){
			for(var j = 0; j < this.game.level.height; j++){

				let index = i * this.game.level.width + j;
				if(this.game.level.data[index] == 2 || this.game.level.data[index] == 3){
					let x = (this.game.level.tilesize * i) + (this.game.level.tilesize / 2);
					let y = (this.game.level.tilesize * j) + (this.game.level.tilesize / 2);
					let floor = new Phaser.Sprite(this.game, x, y, 'floor');
					floor.anchor.set(0.5)
					floor.boulderFree = this.game.level.data[index] == 3 ? true : false;
					this.add(floor);
				}

			}
		}

	}

	isBoulderFree(x,y){
		for(let floor of this.children){
			if (floor.x == x && floor.y == y){
				return floor.boulderFree;
			}
		}
		return true;
	}

}
