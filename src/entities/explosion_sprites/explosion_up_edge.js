class ExplosionUpEdge extends ExplosionSprite {
	constructor(game, x, y) {
		super(game, x, y);

		this.animations.add('explode', [3, 10, 17, 24], 4, true);
	}
}