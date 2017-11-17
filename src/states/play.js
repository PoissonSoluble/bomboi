class PlayState extends Phaser.State {
	create() {
		this.floor = new Floor(this.game);
		this.walls = new Walls(this.game);
		this.boulders = new Boulders(this.game, this.walls, this.floor);
		this.bombs = new Bombs(this.game);
		this.bonuses = new Bonuses(this.game);
		this.characters = new Characters(this.game, 2, this.bombs);
		this.explosions = new Explosions(this.game, this.boulders, this.walls);
		this.bombs.setExplosions(this.explosions);
	}

	update(){
		for(let character of this.characters.children){
		if(!character.isDead()){
				this.game.physics.arcade.collide(character, this.walls);
				this.game.physics.arcade.collide(character, this.boulders);
				this.game.physics.arcade.collide(character, this.boulders);
				this.game.physics.arcade.overlap(character, this.bonuses, PlayState.prototype.characterGetBonus.bind(this));
				this.game.physics.arcade.overlap(character, this.explosions.getAllChildren(), PlayState.prototype.collisionExplosionCharacter.bind(this));
			}
		}
		
		this.game.physics.arcade.overlap(this.explosions, this.bombs, PlayState.prototype.bombActivateBomb.bind(this));
		this.game.physics.arcade.overlap(this.explosions, this.bonuses, PlayState.prototype.destroyBonus.bind(this));
		this.game.physics.arcade.overlap(this.boulders, this.explosions.getAllChildren(), PlayState.prototype.collisionExplosionBoulder.bind(this));
	}

	collisionExplosionBoulder(explosion, boulder){
		this.bonuses.generateBonus(boulder.x, boulder.y);
		this.boulders.remove(boulder);
	}

	destroyBonus(explosion, bonus){
		if(bonus.isDestroyable()){
			this.bonuses.remove(bonus);
		}
	}

	bombActivateBomb(explosion, bomb){
		bomb.explode();
	}

	characterGetBonus(character, bonus){
		bonus.affect(character);
		this.bonuses.remove(bonus);
	}

	collisionExplosionCharacter(character, explosion){
		character.die();
	}


	render(){
		if(Game.DEBUG){
			for(let explosion of this.explosions.getAllChildren())
				this.game.debug.body(explosion);
			this.game.debug.body(this.character)
		}
	}
}