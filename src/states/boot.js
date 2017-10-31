class BootState extends Phaser.State {
    
    
    preload() {
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    }

    create() {
        this.game.state.start('load');
    }

}
