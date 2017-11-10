class LoadState extends Phaser.State {

	preload() {

		this.game.stage.backgroundColor = '#87e33a';
		this.loaded = false;

		this.interval = setInterval(LoadState.prototype.checkIfLoaded.bind(this), 500);

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//this.scale.setGameSize(window.innerWidth, window.innerHeight);
		this.game.load.image("wall", "assets/wall.png");
		this.game.load.image("floor", "assets/floor.jpg");
		this.game.load.image("boulder", "assets/boulder.png");
		this.game.load.image("bomb", "assets/bomb.png");
		this.game.load.image("boulder", "assets/boulder.png");
		this.game.load.image("bonus_bomb", "assets/bonus_bomb.png");
		this.game.load.image("bonus_fire", "assets/bonus_fire.png");
		this.game.load.image("bonus_speed", "assets/bonus_speed.png");
		this.game.load.spritesheet('character', 'assets/dude.png', 70, 87.5);
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
