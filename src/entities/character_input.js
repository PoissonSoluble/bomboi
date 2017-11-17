class CharacterInput{
	
	constructor(game){
		this.game = game;
	}

	static defaultSetup(game,i){
		if(i == 1){
			return CharacterInput.defaultSetupP1(game)	
		}
		if(i == 2){
			return CharacterInput.defaultSetupP2(game)	
		}
	}

	static defaultSetupP1(game){
		let inputs = new CharacterInput(game);
		inputs.left = Phaser.KeyCode.LEFT;
		inputs.up = Phaser.KeyCode.UP;
		inputs.right = Phaser.KeyCode.RIGHT;
		inputs.down = Phaser.KeyCode.DOWN;
		inputs.bomb = Phaser.KeyCode.NUMPAD_0;
		return inputs;
	}

	static defaultSetupP2(game){
		let inputs = new CharacterInput(game);
		inputs.left = Phaser.KeyCode.Q;
		inputs.up = Phaser.KeyCode.Z;
		inputs.right = Phaser.KeyCode.D;
		inputs.down = Phaser.KeyCode.S;
		inputs.bomb = Phaser.KeyCode.SPACEBAR;
		return inputs;
	}
}