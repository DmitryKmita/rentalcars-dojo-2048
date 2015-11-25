var core = {
    map: [],
    width: 0,
    height: 0,
    //INITS THE GAME FIELD
    initMap: function(width, height) {
        var me = this, w,h;
        me.width = width;
        me.height = height;
        for(w=1; w<=me.width; w++) {
            if (me.map[w] == undefined) {
                me.map[w] = [];
            }
            for(h=1; h<=me.height; h++) {
                me.map[w][h] = 0;
            }
        }
        return me.map;
    },
    // GAME OVER
    showGameOverScreen: function() {
        alert('Game Over!');
    },
    // GENERATES A NEW CELL
    newTurn: function() {
        var me = this, number;
        number = me.getRandomNewNumber();
        me.placeNumberToRandomPlace(number);
        me.drawScreen();
    },
    // RESET THE MAP FOR CORE
    setMap: function(map) {
        var me = this, w,h;
        for(w=1; w<=me.width; w++) {
            if (me.map[w] == undefined) {
                me.map[w] = [];
            }
            for(h=1; h<=me.height; h++) {
                me.map[w][h] = map[w][h];
            }
        }
    },
    // REDRAWING THE GAME FIELD
    drawScreen: function() {
        var screen = $(".game-layer__screen"), me = this, text, className;
        screen.html('');
        for(w=1; w<=me.width; w++) {
            screen.append('<div class="row">');
            for(h=1; h<=me.height; h++) {
                if (me.map[w][h] !== 0) {
                    text = me.map[w][h];
                    className = 'visible';
                } else {
                    text = '';
                    className = 'visible';
                }
                screen.append(
                    '<div class="game-layer__screen__cell ' + className + ' game-layer__screen__cell--number-' + me.map[w][h] + '" data-number="' + me.map[w][h] + '">' + text + '</div>'
                );
            }
            screen.append('</div>');
        }
    },
    // PLACES THE NUMBER TO RANDOM PLACE
    placeNumberToRandomPlace: function(number) {
        var freeSpace = false, me = this;
        while (!freeSpace) {
            var w = Math.floor(Math.random() * (5 - 1) + 1);
            var h = Math.floor(Math.random() * (5 - 1) + 1);
            if (me.map[w][h] == 0) {
                freeSpace = true;
            }
        }
        me.map[w][h] = number;
        me.drawScreen();
    },
    // GENERATES THE RANDOM NUMBER
    getRandomNewNumber: function() {
        var number = Math.floor(Math.random() * (100));
        if (number < 10) {
            return 4;
        }
        if (number < 55) {
            return 1;
        }
        return 2;
    }
};