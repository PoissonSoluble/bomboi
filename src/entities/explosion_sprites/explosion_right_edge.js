class ExplosionRightEdge extends ExplosionSprite {
	constructor(game, x, y) {
		super(game, x, y);

		this.animations.add('explode', [5, 12, 19, 26], 4, true);
	}
}