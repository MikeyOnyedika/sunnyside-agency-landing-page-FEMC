import { createProxiedState } from "./reactiveState"

const menuBtn = document.getElementById("menu-btn");
const menubarEl = document.querySelector(".nav-wrapper");

let proxiedState = createProxiedState<{ isOpenMenu: boolean }>({ isOpenMenu: false });

function toggleIsOpenMenu() {
    proxiedState.state.isOpenMenu = !proxiedState.state.isOpenMenu;
}


function showNavBar() {
    menubarEl?.classList.remove("hidden");
    menubarEl?.classList.add("flex");
}

function hideNavBar() {
    menubarEl?.classList.add("hidden");
    menubarEl?.classList.remove("flex");
}

// show/hide the menu bar when isOpenMenu is toggled
proxiedState.addListener((state) => {
    if (state.isOpenMenu) {
        // show menu bar
        showNavBar();
    } else {
        //hide menu bar
        hideNavBar();
    }
    console.log("menubar classlist", menubarEl?.classList);
})

// menuBtn?.addEventListener("click", () => {
//     console.log("click");
//     toggleIsOpenMenu();
// });
//
//

/*
 * TODO: this is the weirdest issue I've faced today. When I handle the click event on the hamburger button using the event listener set directly on the menuBtn object, everything works as expected but once I try to handle the click even on the same hamburger button using the document.addEventListener(), then clicking on the button only registers when the lower part of the button is clicked.
 * i still need to implement hiding the navbar if someother part of the page was clicked. This is what I am currently working on. That and completing the styling for the navbar. the <li> for the navbar is still not well styled 
 * Once this is done, I can start stylding for desktop layout
 * 
*/

document.addEventListener("click", (event) => {
    if (event.target == menuBtn) {
        console.log("toggle buttonclicked");
        toggleIsOpenMenu();
    }

    //
    // if (menubarEl?.contains(event.target as Node) === false) {
    //     hideNavBar();
    // }
})
