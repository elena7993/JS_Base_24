// *변수의 범위
// 1.전역변수
// =>전체 영역에서 사용할 수 있는 변수로 함수 안에 작성하지 않음

// 2.지역변수
// =>함수 내부에서만 사용할 수 있는 변수로 함수 밖에서는 사용 불가

// 변수를 사용할 때 범위를 잘보고 사용하자

// 2ad06a4f944e2127313de92dc83a1b0f


// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// 변수로 빼서 작업하면 간견해고 편하진다

// fetch(url);

const weather = (pos) => {
    const API_KEY = "2ad06a4f944e2127313de92dc83a1b0f";
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    const tempEl = document.querySelector('.temp span');
    const cityEl = document.querySelector('.city span');
    // console.log(pos);

    fetch(url).then((respond) => respond.json()).then((data) => {
        console.log(data);
        tempEl.innerText = data.main.temp;
        cityEl.innerText = data.name;
    })
    // 리턴할 값이 여러개면 중괄호열어라!
}

navigator.geolocation.getCurrentPosition(weather);
// weather를 이안에 넣어줌


// ***기술 블로그 하나 만들어 볼 것***

// 내가 오늘 배운내용 혹은 찾아본 내용을 일기처럼
// 주저리저주리 적어볼 것
// 예쁘게 적으려고 하지말고

// 내가 보기 좋게 정리해서 적어볼 것
// 이런 저런 경험했고 어떤 실패를 했고 어떻게 했는지
// 힘들었던 이런 내용도 좋다

// velog에서 만들어 볼 것*************



// ***오늘의 스터디***
// 1.브라우저에 하나에 3개 도시의 날씨가 뜬다
// 2.그 날씨가 5분마다 갱신된다.
// 3.ui에 너무 시간쓰지 말것
