"use strict"

// functions
let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);
let toggle = (item, _class) => check(item, _class) ? remove(item, _class) : add(item, _class);


let resetRadioBox = (arr) => {
    for (const iterator of arr) {
        let card = iterator.closest(".pladge-card-modal-js");
        let card_cost = card.querySelector(".enter-pladge");
        remove(card, "selected");
        add(card_cost, "hidden");
    }
}

let updateStates = (Money, Backers) => {
    totalAmountOfMoney_text.innerText = `$ ${new Intl.NumberFormat().format(Money)}`;
    amountOfBackers_text.innerText = `${new Intl.NumberFormat().format(Backers)}`;
    progress_bar.value = Money;
}
//variable

let totalAmountOfMoney = 89914;

let amountOfBackers = 5007;

let totalAmountOfMoney_text = document.getElementById("totalAmountOfMoney-js");

let amountOfBackers_text = document.getElementById("amountOfBackers-js");

let progress_bar = document.getElementById("progress-js");

let bookmark_btn = document.querySelector(".bookmark-btn");

let open_menu = document.querySelector("#open-js");

let close_menu = document.querySelector("#close-js");

let mobile_menu_container = document.querySelector(".mobile-nav-container");

let backProject = document.getElementById("back-js");

let modalOverlay = document.getElementById("modal-overlay");

let pladgeModal = document.getElementById("pladges-section-modal-js");

let pladgeComplete = document.getElementById("pladge-complete-js");

let closeModal = document.getElementById("close-modal-js");

let pladgeTiers = document.querySelectorAll(".radio-btn-js input");

let continue_btns = document.querySelectorAll(".continue-js");

let gotIt_btn = document.getElementById("got-it-js");
//event listners

updateStates(totalAmountOfMoney, amountOfBackers);

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

backProject.addEventListener("click", () => {
    remove(modalOverlay, "hidden");
})

closeModal.addEventListener("click", () => {
    add(modalOverlay, "hidden");
})

for (const pladgeTier of pladgeTiers) {
    pladgeTier.addEventListener("change", (e) => {

        resetRadioBox(pladgeTiers);

        if (e.target.checked) {
            let card = e.target.closest(".pladge-card-modal-js");
            let card_cost = card.querySelector(".enter-pladge");
            add(card, "selected");
            remove(card_cost, "hidden");
        }
    })
}

for (const btn of continue_btns) {
    btn.addEventListener("click", (e) => {
        let currentValue = parseFloat(e.target.previousElementSibling.value);
        let minimumValue = parseFloat(e.target.previousElementSibling.placeholder.slice(2));
        if (currentValue >= minimumValue && currentValue !== NaN) {
            add(pladgeModal, "hidden");
            remove(pladgeComplete, "hidden");
            totalAmountOfMoney += currentValue;
            amountOfBackers++;
            updateStates(totalAmountOfMoney, amountOfBackers);
        }
        else {
            alert("please enter the minimum amount");
        }
    })
}

gotIt_btn.addEventListener("click", () => {
    remove(pladgeModal, "hidden");
    add(pladgeComplete, "hidden");
    add(modalOverlay, "hidden");
})
