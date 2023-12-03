import { menu } from "./menu.js";
import { initTimerEvents } from "./timer.js";
import { initMotiveTextEvents } from "./motive.js";

window.addEventListener("load", function () {
    menu();
    initTimerEvents();
    initMotiveTextEvents();
});