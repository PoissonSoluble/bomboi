class Game extends Phaser.Game {

    constructor() {
        let w, h;
        /*const RESOLUTION = 800;
        if(window.innerWidth > window.innerHeight) {
            w = RESOLUTION*(window.innerWidth / window.innerHeight)
            h = RESOLUTION
        } else {
            w = RESOLUTION
            h = 800*(window.innerHeight / window.innerWidth)
        }*/
        w = 1900;
        h = 1900;
        super(w, h, Phaser.AUTO, 'auto', null, null, false);

        this.state.add('boot', BootState, true);
        this.state.add('load', LoadState, false);
        this.state.add('play', PlayState, false);
    }

}
