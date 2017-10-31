class ExplosionDownEdge extends ExplosionSprite {
	constructor(game, x, y) {
		super(game, x, y);

		this.animations.add('explode', [4, 11, 18, 25], 4, true);
	}
}