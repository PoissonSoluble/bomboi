class Characters extends Phaser.Group {

	constructor(game, players, bombs) {
		super(game);

		if(players > 2){
			players = 2
		}

		for(let i = 1; i <= players; i++){
			let character = new Character(this.game, i, bombs, CharacterInput.defaultSetup(this.game, i));
			this.add(character);
		}
	}
}
