# rentalcars-dojo-2048
Coding Dojo in Rentalcars.com

Hi there!

This is a basic template for making a 2048 game.

The core functionality is placed in *js/core.js* which you can use. Your code should be in *js/game.js* (but not necessary).

About the game:
* 2048 is played on a gray 4×4 grid, with numbered tiles that slide when a player moves them using the four arrow keys.
* Every turn, a new tile will randomly appear in an empty spot on the board with a value of either 1,  2 (smaller chance) or 4 (rare).
* Tiles slide as far as possible in the chosen direction until they are stopped by either another tile or the edge of the grid.
* If two tiles of the same number collide while moving, they will merge into a tile with the total value of the two tiles that collided.
* The resulting tile cannot merge with another tile again in the same move.
