const wrapEl = document.querySelector('.wrap');


const clickHandler = (e) => {
  if(e.target.classList.contains('list')){

    const listAll = document.querySelectorAll('.list');

    for(let i = 0; i < listAll.length; i++){
    listAll[i].classList.remove('active');
  }
  e.target.classList.add('active');

  }

};

wrapEl.addEventListener('click', clickHandler);

// 자 하나하나 뜯어보자

// **내가 어려워했던부분 e.target**
// (성찬 설명으로 도움 많이 되었음!!)

// 다시정리

// e.target.classList.contains('list')는 우리가 클릭한 요소가 class="list"를 가지고 있는지 확인하는 조건이다!

// 만약 클릭한 요소가 li이고, 클래스 이름이 list라면 아래 코드를 실행한다

// 즉 내가 진짜 클릭한 게 li 맞아? 라고 묻는 거라고 생각하면 된다!! 오키도키??