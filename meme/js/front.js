import { hideTabs, unhideTabById, setEventListeners } from "./start.js";
import { createVideoElement, createVideoSection } from "./modify.js";

window.onload = function () {
    console.log('Bruh');    
    hideTabs();
    unhideTabById('home');
    setEventListeners();
}