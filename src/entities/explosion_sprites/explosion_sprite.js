class ExplosionSprite extends Phaser.Sprite {
	constructor(game, x, y){
		super(game, 0, 0, 'explosion');

		this.game = game;

		this.anchor.setTo(0.5, 0.5);
		this.x = x; 
		this.y = y; 
		this.scale.setTo(4);
	}
	update(){
		this.animations.play('explode');
	}

	collidesWith(x,y){
		return this.x == x && this.y == y;
	}
}