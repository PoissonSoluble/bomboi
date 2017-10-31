class ExplosionCenter extends ExplosionSprite {
	constructor(game, x, y) {
		super(game, x, y);

		this.animations.add('explode', [0, 7, 14, 21], 4, true);
	}
}