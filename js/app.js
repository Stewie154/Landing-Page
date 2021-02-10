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

//function to get a number of how far away a section is from the top of the viewport
const topProp = (section) => {
    //uses getBoundingClientRect to return the top property of the section. (relative to the top of the viewport)
    return Math.floor(section.getBoundingClientRect().top);
};

//add the active class
const addActiveClass = (section) => {
    section.classList.add('your-active-class');
};

//remove the active class
const removeActiveClass = (section) => {
    section.classList.remove('your-active-class');
};

//checks to see where each section is relative to top of viewport (using number generated from topProp function), adds / removes active class accordingly
const sectionCheck = () => {
    for(section of sections) {
        const topNum = topProp(section);
        //ternary operator checks the topNum number, adds / removes class using previously defined functions
        topNum > -300 && topNum < 400 ? addActiveClass(section) : removeActiveClass(section);

        //console.log(topNum); (this console log was used to see which numbers I needed to be checking for)
    }
};

//added event listener for scrolling the window
window.addEventListener('scroll', sectionCheck);


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


