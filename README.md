# tetris
Browser-based game built with Javascript and HTML canvas.
Goal: Slam down 20 rows as fast as you can.

Live: http://oscarliu.info/tetris

## Advanced Features
* All gameplay rendered in HTML Canvas, with only the moving piece getting
redrawn to keep calls to the canvas at a minimum.

#### Two sets of controls, Simple and Classic:
* Simple controls for casual players who want to use the directional pad.
  Supports only one direction of rotation. Not recommended for those aiming to
  reach the leaderboard!
* Classic controls mimic classic Gameboy controls:
    * UP triggers fast-drop
    * J/K (like the traditional A/B buttons) enable omnidirectional rotation,
    allowing players to minimize their keypresses to get pieces in the exact
    positions that they want.

#### Block saving supported
* Press the appropriate button to stash the current block to be used later!
* Saved block can only be swapped once; you can't stall the game by
  repeatedly stashing.

#### Timer
* Uses the [timer.jquery](https://github.com/walmik/timer.jquery) plugin to
  track times; pause and restart events in the game trigger those respective
  actions on the timer

#### Leaderboard live!
* Leaderboard lives on a Heroku app that holds onto a table of names and
  times.
* Page makes AJAX requests to the database to retrieve and update scores.

## Creation roadmap
### main
- [x] board
- [x] cells
- [x] blocks
  - [x] basic blocks
  - [x] block inheritance
- [x] game
- [x] score view
- [x] next block view
- [x] block saving

### more gameplay
- [x] timer, runs while game is in progress, paused when game paused
- [x] win condition at 40 rows; lose if top out
- [x] leaderboard tracks best times

### extras
- [ ] ghost block
- [ ] better randomization so less frustration (probably add into utils)
- [ ] user interface:
  - [ ] make instructions pop up more, force people to pick a set of controls
  - [ ] make score submitting more visually engaging
