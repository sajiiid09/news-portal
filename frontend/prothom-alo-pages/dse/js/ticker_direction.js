let scroll_item_all = document.querySelector(".share-scroller-all-item");

let left_single_scroller = document.querySelector(".left-single-scroller");
let left_double_scroller = document.querySelector(".left-double-scroller");
let right_single_scroller = document.querySelector(".right-single-scroller");
let right_double_scroller = document.querySelector(".right-double-scroller");

let share_scroller_all_item = document.querySelector(
    ".share-scroller-all-item"
);

left_single_scroller.classList.add("share-scroller__scroller-icon-active");

left_single_scroller.addEventListener("click", function(e) {
    e.preventDefault();
    this.classList.add("share-scroller__scroller-icon-active");
    left_double_scroller.classList.remove("share-scroller__scroller-icon-active");
    right_single_scroller.classList.remove(
        "share-scroller__scroller-icon-active"
    );
    right_double_scroller.classList.remove(
        "share-scroller__scroller-icon-active"
    );
    share_scroller_all_item.style.animationDirection = "normal";
    share_scroller_all_item.style.animationDuration = "500s";
});

left_double_scroller.addEventListener("click", function(e) {
    e.preventDefault();
    this.classList.add("share-scroller__scroller-icon-active");
    left_single_scroller.classList.remove("share-scroller__scroller-icon-active");
    right_single_scroller.classList.remove(
        "share-scroller__scroller-icon-active"
    );
    right_double_scroller.classList.remove(
        "share-scroller__scroller-icon-active"
    );
    share_scroller_all_item.style.animationDirection = "normal";
    share_scroller_all_item.style.animationDuration = "300s";
});

right_single_scroller.addEventListener("click", function(e) {
    e.preventDefault();
    this.classList.add("share-scroller__scroller-icon-active");
    left_single_scroller.classList.remove("share-scroller__scroller-icon-active");
    left_double_scroller.classList.remove("share-scroller__scroller-icon-active");
    right_double_scroller.classList.remove(
        "share-scroller__scroller-icon-active"
    );
    share_scroller_all_item.style.animationDirection = "reverse";
    share_scroller_all_item.style.animationDuration = "500s";
});

right_double_scroller.addEventListener("click", function(e) {
    e.preventDefault();
    this.classList.add("share-scroller__scroller-icon-active");
    left_single_scroller.classList.remove("share-scroller__scroller-icon-active");
    left_double_scroller.classList.remove("share-scroller__scroller-icon-active");
    right_single_scroller.classList.remove(
        "share-scroller__scroller-icon-active"
    );
    share_scroller_all_item.style.animationDirection = "reverse";
    share_scroller_all_item.style.animationDuration = "300s";
});