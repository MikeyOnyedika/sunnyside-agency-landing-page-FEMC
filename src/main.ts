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
})

document.addEventListener("click", (event) => {
    if (event.target == menuBtn) {
        toggleIsOpenMenu();
        return;
    }
    if (menubarEl?.contains(event.target as Node) === false) {
        proxiedState.state.isOpenMenu = false;
    }
})
