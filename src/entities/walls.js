class Walls extends Phaser.Group {
	constructor(game) {
		super(game);
		this.game = game;
		this.enableBody = true;
		for(var i = 0; i < 19; i++){
			for(var j = 0; j < 19; j++){
				if(i == 0 || i == 18 || j == 0 || j == 18 || (i%2 == 0 && j%2 == 0)){
					let wall = new Phaser.Sprite(this.game, (this.game.width / 19) * i, (this.game.height / 19) *j, 'wall');
					//wall.scale.setTo(.25);
					this.game.physics.enable(wall, Phaser.Physics.ARCADE)
					wall.body.immovable = true;
					this.add(wall);
				}
			}
		}
	}
}
