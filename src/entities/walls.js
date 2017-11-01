class Walls extends Phaser.Group {

	constructor(game) {
		super(game);
		this.game = game;
		this.enableBody = true;
		for(var i = 0; i < Game.SIZE; i++){
			for(var j = 0; j < Game.SIZE; j++){
				if(Walls.isWall(i,j)){
					let wall = new Phaser.Sprite(this.game, (this.game.width / 19) * i + 50, (this.game.height / 19) * j + 50, 'wall');
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
