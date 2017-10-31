class Floor extends Phaser.Group {
	constructor(game) {
		super(game);
		this.game = game;
		for(var i = 0; i < 19; i++){
			for(var j = 0; j < 19; j++){
				let floor = new Phaser.Sprite(this.game, (this.game.width / 19) * i, (this.game.height / 19) *j, 'floor');
				//floor.scale.setTo(.25);
				this.add(floor);
			}
		}
	}
}
