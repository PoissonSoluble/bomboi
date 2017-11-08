class Walls extends Phaser.Group {

	constructor(game) {
		super(game);
		this.game = game;
		this.enableBody = true;
		for(var i = 0; i < Game.SIZE; i++){
			for(var j = 0; j < Game.SIZE; j++){
				if(Walls.isWall(i,j)){
					let x = (this.game.width / Game.SIZE) * i + (Game.GRID_CELL_SIZE/2);
					let y = (this.game.height / Game.SIZE) * j + (Game.GRID_CELL_SIZE/2);
					let wall = new Phaser.Sprite(this.game, x, y,'wall');
					//wall.scale.setTo(.25);
					wall.anchor.setTo(0.5,0.5)
					this.game.physics.enable(wall, Phaser.Physics.ARCADE)
					wall.body.immovable = true;
					this.add(wall);
				}
			}
		}
	}

	static isWall(i,j){
		return (i == 0 || i == (Game.SIZE - 1) || j == 0 || j == (Game.SIZE - 1) || (i%2 == 0 && j%2 == 0))
	}
}
