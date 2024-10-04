const users = [
    {
        id: 0,
        avatarUrl: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2299",
        usersname: "user 1",
        imgUrl: "https://www.egnyte.com/sites/default/files/inline-images/The%20expansion%20of%20cloud%20applications%20has%20added%20to....png"
    },
    {
        id: 1,
        avatarUrl: "https://media.licdn.com/dms/image/v2/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=uHzeaBv3V2z6Tp6wvhzGABlTs9HR-SP-tEX1UbYNn4Q",
        usersname: "user 1",
        imgUrl: "https://www.techinsights.com/sites/default/files/2023-04/ma-user-experience.png"
    },
    {
        id: 2,
        avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEcQE3lsSkVzA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700310963378?e=2147483647&v=beta&t=I9Ul36GOfA24HE8I0DyAK8rANXzNq9hVkN0WWZfIfLE",
        usersname: "user 1",
        imgUrl: "https://etimg.etb2bimg.com/thumb/msid-94376113,imgsize-50506,width-1200,height=765,overlay-ethealth/mergers-and-aquisitions/icmr-iisc-ink-pact-to-create-high-quality-medical-datasets.jpg"
    }
];


const wrapEl = document.querySelector('.wrap');
const avatarAll = document.querySelectorAll('.avatar');
const usernameAll = document.querySelectorAll('.username');
const bgAll = document.querySelectorAll('.bg');

const menuEl = document.querySelector('.menu');
const menuWrapEl = document.querySelector('.menu_wrap');
let isClicked = true;

for(let i =0; i < users.length; i++){
    avatarAll[i].innerHTML = `<img src="${users[i].avatarUrl}">`;
    usernameAll[i].innerText = users[i].usersname;
    bgAll[i].innerHTML = `<img src="${users[i].imgUrl}">`;
}

const heartHandler = (e) => {
 if(e.target.classList.contains('fa-regular')){
    e.target.parentNode.innerHTML = `<i class="fa-solid fa-heart full_heart"></i>`
 }else if(e.target.classList.contains('full_heart')){
    e.target.parentNode.innerHTML = `<i class="fa-regular fa-heart"></i>`
 }
};

wrapEl.addEventListener('click', heartHandler);

// avatarAll[0].innerHTML = `<img src="${users[0].avatarUrl}">`;
// usernameAll[0].innerText = users[0].usersname;
// bgAll[0].innerHTML = `<img src="${users[0].imgUrl}">`;

// 하트채우기
// 이벤트위임하는 거임

const menuHandler = () => {
    if(isClicked === true){
        menuWrapEl.classList.add('menu_active');
        isClicked = false
    }else if(isClicked === false){
        menuWrapEl.classList.remove('menu_active');
        isClicked = true
    }
}

menuEl.addEventListener('click', menuHandler);


// const menuHandler = () => {
//     if(isClicked){
//         menuWrapEl.classList.add('menu_active');
//         isClicked = false
//     }else if(!isClicked){
//         menuWrapEl.classList.remove('menu_active');
//         isClicked = true
//     }
// }

// 이렇게도 줄일 수 있다


