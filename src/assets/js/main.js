import { menu } from "./menu.js";
import { initTimerEvents } from "./timer.js";

window.addEventListener("load", function () {
    menu();
    initTimerEvents();
});