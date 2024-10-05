// 클릭했을때 div안에 버튼에 생성, 추가된다
// if문, for문, createElement, append, innerHTML

// const btnWrap = document.querySelector('.btn_wrap');
// const btnEl = document.querySelector('.btn');


// const clickHandler = (e) => {
//   if(e.target.classList.contains('btn')){
//     btnWrap.createElement.add('button');
//     btnWrap.append()
//   }
// }

// ---------------------------------------------------


// btnEl.addEventListener('click', clickHandler);

// 1. 요소 선택
// const btnWrap = document.querySelector('.btn_wrap'); // 버튼들이 담길 부모 요소
// const btnEl = document.querySelector('.btn'); // "추가" 버튼

// // 2. 버튼 번호를 저장할 변수
// let buttonCount = 1;  // 새 버튼의 번호를 1부터 시작

// // 3. "추가" 버튼 클릭 시 새로운 버튼 생성 및 추가
// const clickHandler = (e) => {
//   if (e.target === btnEl) {  // 클릭한 요소가 "추가" 버튼이면
//     // 새로운 버튼 생성
//     const newButton = document.createElement('button');
//     newButton.innerHTML = `Button ${buttonCount}`;  // 버튼 텍스트에 번호 추가
//     newButton.classList.add('btn');  // 클래스 추가
//     buttonCount++;  // 번호 증가

//     // 생성된 버튼을 부모 요소에 추가
//     btnWrap.append(newButton);
//   }
// }

// // 4. 버튼을 클릭하면 해당 버튼 삭제
// const deleteHandler = (e) => {
//   if (e.target !== btnEl) {  // 클릭한 요소가 "추가" 버튼이 아니면
//     e.target.remove();  // 해당 버튼 삭제
//   }
// }

// // 5. 이벤트 리스너 등록
// btnEl.addEventListener('click', clickHandler);  // "추가" 버튼에 클릭 이벤트 추가
// btnWrap.addEventListener('click', deleteHandler);  // btnWrap에 이벤트 위임으로 삭제 기능 추가


const btnWrap = document.querySelector('.btn_wrap');
const btnEl =  document.querySelector('.btn');
let btncount = 1;

const clickHandler = (e) => {
  if(e.target === btnEl){
    const newButton = document.createElement('button');
    newButton.innerHTML = `Button${btncount}`;
    newButton.classList.add('btn');
    btnWrap.append(newButton);
    btncount++
  }
}

const deleteHandler = (e) => {
  if(e.target !== btnEl){
    e.target.remove();
  }
}

btnEl.addEventListener('click', clickHandler);
btnWrap.addEventListener('click', deleteHandler);

// *remove() 메서드는 그냥 호출만 하면 해당 요소를 삭제해주기 때문에, 인자(파라미터)가 필요 없는 함수라고 생각하면 된다. 그래서 () 안에 아무것도 안 적어도 된다 

