import { state } from "./store.js";
import { render } from "./core.js";
import { randomizePos } from "./utils.js";

export function handleInput(cb: any) {
  process.stdin.removeAllListeners("data");
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);
  process.stdin.on("data", key => cb(key));
}


export function exitTerminal() {
  process.stdout.write("\x1b[?1049l");
  process.exit();
}

export function setUpTerminal() {
  const { randX, randY } = randomizePos();
  state.targetX = randX;
  state.targetY = randY;

  process.stdout.write("\x1b[?1049h");
  process.stdout.write("\x1b[?25l");
  render();
}