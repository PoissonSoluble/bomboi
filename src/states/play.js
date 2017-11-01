class PlayState extends Phaser.State {
	create() {
		this.floor = new Floor(this.game);
		this.walls = new Walls(this.game);
		this.boulders = new Boulders(this.game);
		this.bombManager = new BombManager(this.game, 1);
		this.character = new Character(this.game, 0, this.bombManager);
	}

	update(){
		this.game.physics.arcade.collide(this.character, this.walls);
		this.game.physics.arcade.collide(this.character, this.boulders);
		this.character.update();

		for(var i = 0; i < this.boulders.children.length; i++){
			if(this.bombManager.bombTouches(this.boulders.children[i].x, this.boulders.children[i].y)){
				this.boulders.children[i].kill();
			}
		}
	}
}