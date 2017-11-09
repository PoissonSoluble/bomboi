class PlayState extends Phaser.State {
	create() {
		this.floor = new Floor(this.game);
		this.walls = new Walls(this.game);
		this.boulders = new Boulders(this.game, this.walls, this.floor);
		this.bombs = new Bombs(this.game);
		this.character = new Character(this.game, 0, this.bombs);
		this.explosions = new Explosions(this.game, this.boulders, this.walls);
		this.bombs.setExplosions(this.explosions);
	}

	update(){
		if(!this.character.isDead()){
			this.game.physics.arcade.collide(this.character, this.walls);
			this.game.physics.arcade.collide(this.character, this.boulders);
			this.game.physics.arcade.overlap(this.character, this.explosions.getAllChildren(), PlayState.prototype.collisionExplosionCharacter.bind(this));
		}
		
		this.game.physics.arcade.overlap(this.boulders, this.explosions.getAllChildren(), PlayState.prototype.collisionExplosionBoulder.bind(this));

	}

	collisionExplosionBoulder(explosion, boulder){
		this.boulders.remove(boulder);
		//kill();
	}

	collisionExplosionCharacter(){
		this.character.die();
	}
}