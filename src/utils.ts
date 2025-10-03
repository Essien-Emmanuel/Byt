import { state } from "./store.js";
import { update } from "./core.js";

export function moveTo() {
  if (Math.random() > 0.5) {
    ++state.targetX;
  } else {
    --state.targetX;
  }
  if (Math.random() > 0.5) {
    ++state.targetY;
  } else {
    --state.targetY;
  }
  update()

}

export function randomizePos() {
  const randX = Math.floor(Math.random() * process.stdout.columns);
  const randY = Math.floor(Math.random() * process.stdout.rows);
  return { randX, randY };
}
