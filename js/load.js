var loadingText;


var loadState = {
    
    init: function () {
        
         this.game.load.onFileComplete.add(fileComplete, this);
         this.game.add.sprite(0,0,'menu');
          loadingText = this.game.add.text(300,150, 'Loading...', { fill: '#ffffff', fontSize: '60px' });
         this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  
        this.game.scale.setScreenSize( true );
        
    },
    
    preload: function () {
        
        
        
        this.game.load.image('diamond', 'assets/diamond.png');
        this.game.load.image('sky', 'assets/sky.png');
        this.game.load.image('ground', 'assets/platform5.png');
        this.game.load.image('bubble', 'assets/bubble.png');
        this.game.load.image('panel', 'assets/panel.png');
        this.game.load.spritesheet('dude', 'assets/robo1.png', 48, 64);
        this.game.load.image('menu', 'assets/MenuScreen.png');
        this.game.load.image('startbutton', 'assets/startbutton.png');
        this.game.load.image('star', 'assets/star.png');
        this.game.load.image('directions', 'assets/directions.png');
        this.game.load.image('playagain', 'assets/playagainbutton.png');
        this.game.load.image('movebutton', 'assets/invisiblebutton.png');
        this.game.load.image('settings', 'assets/settingsbutton.png');
        this.game.load.image('settingspanel', 'assets/settingspanel.png');
        this.game.load.image('submit', 'assets/submitbutton.png');
        this.game.load.image('clear', 'assets/clearbutton.png');
    },
    
    create: function () {
        
        //this.game.add.sprite(0,0,'menu');
        
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  
        this.game.scale.setScreenSize( true );
        
       
        
        //var timerload = game.time.create(false);
    
        //timerload.start();
        
    
        //timerload.add(2000, startMenu, this);
        
       
     //   game.state.start('menu');
        
        
        
        
    }
    
    
    
};


function  startMenu () {
        
        this.game.state.start('menu');
        
}

function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

	loadingText.setText("Loading " + progress + "%");
    if (progress == 100) {
        
        startMenu();
        
    }

}