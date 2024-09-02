const menuBtn = document.querySelector("header button")
console.log("hamburger:", menuBtn)
let isOpenMenu = false;

/* TODO: You're done with the styling for the mobile view of the main webpage. 
 * The only styling that remains is that for the hamburger menu. The footer background color looks abit off. 
 * Don't bother with that. I already checked it and it seems that it's the frontendmentor people that gave us the wrong color. So, don't bother with that. 
 * You left off with testing to see if the event listener code is working correctly and it is.
 * The next step now is to style the .nav in the header section and use hamburger button trigger to open the mobile menu. 
 * The `.primary-nav .nav` class has a `display: none` set on the nav. 
 * For the close of the nav, I think it should be when user clicks outside the nav component.
 * 
 * */

menuBtn?.addEventListener("click", () => {
    isOpenMenu = true;
    console.log('isopenmenu', isOpenMenu);
});
