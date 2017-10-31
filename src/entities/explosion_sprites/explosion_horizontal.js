class ExplosionHorizontal extends ExplosionSprite {
	constructor(game, x, y) {
		super(game, x, y);

		this.animations.add('explode', [2, 9, 16, 23], 4, true);
	}
}