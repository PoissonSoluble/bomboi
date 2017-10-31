class ExplosionVertical extends ExplosionSprite {
	constructor(game, x, y) {
		super(game, x, y);

		this.animations.add('explode', [1, 8, 15, 22], 4, true);
	}
}