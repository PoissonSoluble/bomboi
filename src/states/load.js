class LoadState extends Phaser.State {

	preload() {

		this.game.stage.backgroundColor = '#ffffff';
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		let logo = this.game.add.sprite((Game.SIZE * 100)/2, (Game.SIZE * 100)/2, 'logo');
		logo.anchor.setTo(0.5);
		logo.scale.setTo(2);

		this.loaded = false;

		this.interval = setInterval(LoadState.prototype.checkIfLoaded.bind(this), 500);

		this.game.load.image("wall", "assets/wall.png");
		this.game.load.image("floor", "assets/floor.jpg");
		this.game.load.image("boulder", "assets/boulder.png");
		this.game.load.image("bomb", "assets/bomb.png");
		this.game.load.image("boulder", "assets/boulder.png");
		this.game.load.image("bonus_bomb", "assets/bonus_bomb.png");
		this.game.load.image("bonus_fire", "assets/bonus_fire.png");
		this.game.load.image("bonus_speed", "assets/bonus_speed.png");
		this.game.load.spritesheet('character1', 'assets/dude1.png', 70, 87.5);
		this.game.load.spritesheet('character2', 'assets/dude2.png', 70, 87.5);
		this.game.load.spritesheet('explosion', 'assets/explosion.png', 25, 25);

	}

	checkIfLoaded() {
		if(this.loaded) {
			clearInterval(this.interval);
			this.game.state.start('play');
		}
	}

	create() {
		
		this.loaded = true;
		
	}

}
