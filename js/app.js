/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//container for when each navLink is populated
const navLinksContainer = document.getElementById('navbar__list');
//navLink left empty to be populated for each section by buildNav function 
let navLink = ``;
//grab all sections in the html via the <section> tag
const sections = document.getElementsByTagName('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const buildNav = () => { 
    for(section of sections) {
        console.log('hello');
    }
};

buildNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


