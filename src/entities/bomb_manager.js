class BombManager{

	constructor(game, players){
		this.game = game;

		this.players = players;

		this.bombs = new Array(this.players);

		for(var i = 0; i < this.players; i++){
			this.bombs[i] = new Array(100);
		}
	}
	
	bombTouches(x,y){
		for(var i = 0; i < this.players; i++) {
			for(var j = 0; j < 100; j++){
				if(this.bombs[i][j] != null){
					if(this.bombs[i][j].explosionCollidesWith(x,y)){
						return true;
					}
				}
			}
		}
		return false;
	}

	bombFinished(player){
		let count = 0;
		for(var i = 0; i < 100; i++) {
			if(this.bombs[player][i] != null && this.bombs[player][i].isFinished()){
				this.bombs[player][i] = null;
				count++;
			}
		}

		return count;
	}

	poseBomb(player, x, y, bombPosed, range){
		this.bombs[player][bombPosed] = new Bomb(this.game, (100*Math.floor(x/100)) + 50, (100*Math.floor(y/100)) + 50, range);
	}

}