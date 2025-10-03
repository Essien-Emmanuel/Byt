import { exitTerminal } from "./io.js";
import { state } from "./store.js";

export function update() {
  const { x, y, targetX, targetY } = state;
  if (x === targetX && y === targetY) {
    console.log("You win!");
    exitTerminal();
  }

  render();
}


export function render() {
  console.clear();
  process.stdout.cursorTo(state.x, state.y);
  process.stdout.write("X");
  process.stdout.cursorTo(state.targetX, state.targetY);
  process.stdout.write("O");
}
