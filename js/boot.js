var bootState = {
    
    preload: function () {
        
        this.game.load.image('menu', 'assets/MenuScreen.png');
        
    },
    
    create: function (){
        
           this.game.physics.startSystem(Phaser.Physics.ARCADE);
           
           //this.game.add.sprite(0,0,'menu');
           
           
           var loadingText = game.add.text(300,150, 'Enjoy!', { fill: '#ffffff', fontSize: '60px' });
           
           this.game.state.start('load');
           
          
        
    }
    
    
    
    
};