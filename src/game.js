let _SIZE = 19;

class Game extends Phaser.Game {

    constructor() {
        let w, h;

        w = Game.SIZE * 100;
        h = Game.SIZE * 100;
        super(w, h, Phaser.CANVAS, 'auto', null, null, false);

        this.level = level1;

        this.state.add('boot', BootState, true);
        this.state.add('load', LoadState, false);
        this.state.add('play', PlayState, false);
    }

    static get SIZE() { return _SIZE; }

}