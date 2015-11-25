var game = {
    gameMap: [],
    gameWidth: 4,
    gameHeight: 4,
    changesMade: false,
    score: 0,
    startGame: function() {
        var me = this;
        me.gameMap = core.initMap(me.gameWidth, me.gameHeight);
        core.newTurn();
        me.bindEvents();
    },
    bindEvents: function() {
        var me = this;
        $(document).keydown(function(e){
            var moved = false;
            e = e || window.event;

            if (e.keyCode == '38') {
                me.moveUp();
                moved = true;
            }
            else if (e.keyCode == '40') {
                me.moveDown();
                moved = true;
            }
            else if (e.keyCode == '37') {
                me.moveLeft();
                moved = true;
            }
            else if (e.keyCode == '39') {
                me.moveRight();
                moved = true;
            }
            core.map = game.gameMap;
            if (me.changesMade) {
                me.changesMade = false;
                core.newTurn();
            }
            if (moved) {
                if (me.checkGameOver()) {
                    core.showGameOverScreen(me.score);
                }
            }
        });
    },
    checkGameOver: function() {
        // CHECK IF THE PLAYER HAS NO STEPS LEFT
    },
    moveUp: function() {
        // LOGIC FOR MOVING EVERYTHING UP
        console.log('Moving UP');
    },
    moveDown: function() {
        // YOUR LOGIC FOR MOVING EVERYTHING UP
        console.log('Moving DOWN');
    },
    moveLeft: function() {
        // LOGIC FOR MOVING EVERYTHING LEFT
        console.log('Moving LEFT');
    },
    moveRight: function() {
        // LOGIC FOR MOVING EVERYTHING RIGHT
        console.log('Moving RIGHT');
    }
};