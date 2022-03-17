/* 1 - Loading <script src> in html */
console.log('Hello world!')

/* Home-button & Home-button-burger functionality

2 Added "smurf" click to home-button
3 Create boolean variable that checks if Menu is open
3a The menu is closed by default
4 Function called on click, will open the menu
4a Function adds an "open" class 
4b Function toggles boolean from false to true
5 Function called on click, will close the menu
5a Function removes the "open" class
5b Function toggles boolean from true to false
*/
const homeButtonInHeader = document.querySelector('.home-button');
homeButtonInHeader.addEventListener('click', addsAndRemovesOpenerClass);
let menuIsOpen = false;
function addsAndRemovesOpenerClass() {
    if (!(menuIsOpen)) {
        homeButtonInHeader.classList.add('opener')
        console.log('open')
        menuIsOpen = true;
    } else {
        homeButtonInHeader.classList.remove('opener')
        console.log('closed')
        menuIsOpen = false;
    }
}
/* Home-button & Home-button-burger functionality */