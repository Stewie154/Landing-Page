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
//navLinks left empty to be populated for each section by buildNav function 
let navLinks = ``;
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
    //iterating through each section to create each nav link
    for(section of sections) {
        //getting id and data-nav(name of each section) for each section
        sectionID = section.id;
        navLinkData = section.dataset.nav;
        
        //Create and store nav links for each section in the navLinks variable. Each navLink is given a href from the sectionID variable, and a display name from the NavLinkData variable
        navLinks += `<li class="menu__link"><a href="#${sectionID}">${navLinkData}</a></li>`;
    }

    //adds the <li> elements inside the <ul>. I have made the <ul> a flex container in css, so the <li> elements are spaced evenly across the container
    navLinksContainer.innerHTML = navLinks;
};

//wait for dom to load before adding navbar elements
document.addEventListener('domContentLoaded', buildNav());


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


