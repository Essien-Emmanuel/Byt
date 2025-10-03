#!/usr/bin/env node

import { handleInput } from "./io.js";
import { state } from "./store.js";
import { exitTerminal } from "./io.js";
import { update } from "./core.js";
import { setUpTerminal } from "./io.js";

handleInput((k: string) => {
  if (k === "\x1b[A") {
    state.y = Math.max(--state.y, 0);
  }
  if (k === "\x1b[B") {
    state.y = Math.min(++state.y, process.stdout.rows);
  }
  if (k === "\x1b[C") {
    state.x = Math.min(++state.x, process.stdout.columns);
  }
  if (k === "\x1b[D") {
    state.x = Math.max(--state.x, 0);
  }

  if (k === "\u0003") {
    exitTerminal();
  }

  update()
});


setUpTerminal();

