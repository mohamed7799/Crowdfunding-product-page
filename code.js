"use strict"

// functions
let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);
let toggle = (item, _class) => check(item, _class) ? remove(item, _class) : add(item, _class);

//variable

let bookmark_btn = document.querySelector(".bookmark-btn");

let open_menu = document.querySelector("#open-js");

let close_menu = document.querySelector("#close-js");

let mobile_menu_container = document.querySelector(".mobile-nav-container");

//event listners

bookmark_btn.addEventListener("click", () => {
    toggle(bookmark_btn, "bookmarked");
})


document.addEventListener("click", (e) => {

    if (e.target.closest(".mobile-nav") || e.target === open_menu) {
        add(open_menu, "hidden");
        remove(close_menu, "hidden");
        remove(mobile_menu_container, "hidden");
    }
    else {
        add(close_menu, "hidden");
        add(mobile_menu_container, "hidden");
        remove(open_menu, "hidden");
    }
})