/**
 * @module start.js
 * @description Defines the functions used when the page loads. As of now, that primarily includes hiding elements, though more
 *  will be added over time.
 */

import { createVideoSection } from "./modify.js";

/**
 * Hides all of the tabs in the home section of front.html.
 */
function hideTabs() {
    let tabs = document.getElementsByClassName('tab');
    for (let i of tabs) {
        i.style.display = 'none';
    }
}

/**
 * Sets the display value for the tab with the given id to its default value.
 * @param {string} id The id of the section to be unhidden 
 */
function unhideTabById(id) {
    document.getElementById(id).style.display = 'inline';
}

/**
 * Sets the event listeners for the various buttons across the website. These include the tab buttons in the home section,
 * and control buttons in the video section.
 */
function setEventListeners() {
    let button_tab = document.getElementById('buttons')
    for (let i of button_tab.children) {
        i.addEventListener('click', function () {
            hideTabs();
            unhideTabById(i.value);
        })
    } 

    for (let i of document.getElementsByTagName('form')) {
        let temp_list = new Array();
        let slider_value = 10;
        i.addEventListener('submit', function (event) {
            event.preventDefault();
            for (let j of i.children) {
                if (j.nodeName == "INPUT") {
                    if (j.type == 'range')
                        slider_value = j.value;
                    else
                        temp_list.push(j.value);
                    console.log("Bruh");
                }
            }
        })
        
    }
}

export {hideTabs, unhideTabById, setEventListeners}