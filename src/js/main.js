
// swiper_________________________________________________________________________

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 1000
    },
    speed: 1000
});

// time_________________________________________________________________________

const currentTime = () => {
    const element = document.querySelector('h3');

    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    let day;
    day = hours < 12 ? "AM" : "PM";
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours === 0 ? (hours = 12) : hours;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    element.textContent = `${hours}:${minutes}:${seconds} ${day}`;
};

currentTime();
setInterval(currentTime, 1000);

// popup_________________________________________________________________________

const submitBtnEl = document.querySelector('.submitBtn');
const okBtnEl = document.querySelector('.okBtn');
const popUpEl = document.querySelector('.pop-up');


submitBtnEl.addEventListener("click", () => {
    popUpEl.classList.add("pop-up-open");
})

okBtnEl.addEventListener("click", () => {
    popUpEl.classList.remove("pop-up-open");
})

// tabs_________________________________________________________________________

const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if ( ! currentBtn.classList.contains('active')){
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });
            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});

// move_________________________________________________________________________

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    const btn = question.querySelector(".questionBtn");
    btn.addEventListener("click", () => {
        question.classList.toggle("showText")
    })
})

// backgroundColor/textColor_________________________________________________________________________

function backgroundColor(e) {
    document.body.style.backgroundColor = e.value;
}
function textColor(e) {
    document.body.style.color = e.value;
}







