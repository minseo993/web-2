//DOM조작
//선택
//조작
//이벤트

const bannerEle = document.querySelector(".header_banner");
const headerEle = document.getElementById("header");
const menuItem = document.querySelectorAll(".header_menu>li");
const bannerCount = document.querySelector(".header_banner_count");

// console.log(bannerEle);
// console.log(headerEle);
// console.log(menuItem);

// menuItem[0].innerText = "<a href=''>첫번쨰 li 입니다.</a>";
// menuItem[1].innerText = "두번쨰 li 입니다.";
// menuItem[2].innerText = "세번쨰 li 입니다.";

// setInterval(() => {

// }, interval);//interval(초)마다 반복 실행
// setTimeout(() => {

// }, timeout);//timeout(초)뒤에 한번 실행

let count = 15;
const countFun = setInterval(() => {
    count--;//count = count - 1;
    if (count <= 0) {
        clearInterval(countFun);
        bannerEle.classList.add("hide");
    } else {
        bannerCount.innerText = count;
    }
}, 1000);

// setTimeout(() => {
//     console.log("3초 뒤에 실행");
// }, 3000);