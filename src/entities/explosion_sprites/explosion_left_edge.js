class ExplosionLeftEdge extends ExplosionSprite {
	constructor(game, x, y) {
		super(game, x, y);

		this.animations.add('explode', [6, 13, 20, 27], 4, true);
	}
}