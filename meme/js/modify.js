/**
 * @module create
 * @description Defines functions related to creating, deleting, and modifying elements in the DOM. This includes section 
 * elements, videos images, and so on. These functions are exported and primarily used in front.js.
 */

/**
 * Creates an element to display a video
 * @returns {HTMLElement} The video container (article) with the video inside of it
 */
function createVideoElement() {

    let video_container = document.createElement('article');
    video_container.style.maxHeight = '300px';
    video_container.style.maxWidth = '40%';


    let video = document.createElement('video');
    video.src = '../videos/microfrog.mp4';
    video.style.maxWidth = '100%';
    video.style.maxHeight = '100%';
    video.controls = true;
    video_container.appendChild(video);
    
    return video_container;
}

/**
 * Applies the styles to the video section, making the videos line up properly.
 * @param {HTMLElement} section The section containing the video elements.
 */
function styleVideoSection(section) {
    section.style.display = 'flex';
    section.style.flexDirection = 'row';
    section.style.flexWrap = 'wrap';
    section.style.justifyContent = 'space-around';
}


/**
 * 
 * @param {number} number The number of videos to be created. 
 */
function createVideoSection(number) {
    let section = document.createElement('section');
    for (let i = 0; i < number; i++) {
        section.appendChild(createVideoElement());
    }

    styleVideoSection(section);
    return section;
}

export {createVideoElement, createVideoSection}