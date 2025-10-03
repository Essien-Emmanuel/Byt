import { moveTo } from "./utils.js";
export const state = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    interval: setInterval(() => {
        moveTo();
    }, 1000)
};
//# sourceMappingURL=store.js.map