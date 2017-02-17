var menuState = {
    
    create: function () {
        
        //var titleText = game.add.text(300,150, 'Robo', { fill: '#ffffff', fontSize: '120px' });
        
        game.add.sprite(0,0,'menu');
        
        //var startText = game.add.text(300,game.world.height - 120, 'click this diamond to start', { fill: 'black', fontSize: '60px' });
        
       
        
        //this might not work
        var button = game.add.button (400,300, 'startbutton', start, this, 2,1,0);
        
        
    },

    
    
    
    
};

  function  start () {
        
        game.state.start('play');
        
    }