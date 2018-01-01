start = function() {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render:render});

    function preload () {

        this.load.image('Base','assets/images/starterTiles.png',128,128);
        this.load.tilemap('tilemap','assets/map/starterMap.json',null,Phaser.Tilemap.TILED_JSON);
 

    }

    function create () {

        //  Modify the world and camera bounds
        // game.world.setBounds(-2000, -2000, 4000, 4000);

        game.world.resize(3000, 600);

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        var map = this.game.add.tilemap('tilemap');
        map.addTilesetImage('Base','Base',32,32);
        
        ground = map.createLayer('Ground');
        ground.resizeWorld();

        map.createLayer('Water');
        map.createLayer('Objects');
        map.createLayer('Trees');
        
        cursors = game.input.keyboard.createCursorKeys();

    }

    function update() {

        if (cursors.up.isDown)
        {
            game.camera.y -= 4;
            
        }
        else if (cursors.down.isDown)
        {
            game.camera.y += 4;
        }
    
        if (cursors.left.isDown)
        {
            game.camera.x -= 4;
        }
        else if (cursors.right.isDown)
        {
           game.camera.x += 4;
        }
    
    }

    function render() {

        game.debug.cameraInfo(game.camera, 32, 32);
    
    }
    
};