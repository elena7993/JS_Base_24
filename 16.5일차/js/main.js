// ***
// JSON.parse(): 문자열을 자바스크립트 객체나 배열로 변환
// ***
// JSON.stringify(): 객체나 배열을 문자열로 변환


const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const commentListEl = document.querySelector('.comment_list');

let comment = JSON.parse(localStorage.getItem("COMMENTS")) || [];

for(let i = 0; i < comment.length; i++){
  const commentEl = document.createElement('div');
  commentEl.innerText = comment[i];
  commentListEl.append(commentEl);
};

const handleSubmit = (e) => {
  e.preventDefault();

  const inputValue = inputEl.value.trim();

  if(inputValue !== ""){
    // =>빈입력값이 아니면 코멘트값을 넣겠다
    comment.push(inputValue);
    localStorage.setItem("COMMENTS", JSON.stringify(comment));

    const commentEl = document.createElement('div');
    commentEl.innerText = inputValue;
    commentListEl.append(commentEl);

    inputEl.value = "";
  };
};

formEl.addEventListener('submit', handleSubmit);