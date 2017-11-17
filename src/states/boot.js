class BootState extends Phaser.State {
    
    
    preload() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.load.image("logo", "assets/logo.png");
    }

    create() {
        this.game.state.start('load');
    }

}
