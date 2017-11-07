class PlayState extends Phaser.State {
	create() {
		this.floor = new Floor(this.game);
		this.walls = new Walls(this.game);
		this.boulders = new Boulders(this.game);
		this.bombs = new Bombs(this.game);
		this.character = new Character(this.game, 0, this.bombs);
		this.explosions = new Explosions(this.game);
		this.bombs.setExplosions(this.explosions);
	}

	update(){
		this.game.physics.arcade.collide(this.character, this.walls);
		this.game.physics.arcade.collide(this.character, this.boulders);
		this.game.physics.arcade.overlap(this.boulders, this.explosions.getAllChildren(), PlayState.prototype.collisionExplosionBoulder.bind(this));

		this.character.update();
	}

	collisionExplosionBoulder(explosion, boulder){
		boulder.kill();
	}
}