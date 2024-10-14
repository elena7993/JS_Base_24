const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const heartEl = document.querySelector('.heart');
const commentListEl = document.querySelector('.comment_list');

let comment = JSON.parse(localStorage.getItem("COMMENT")) || [];

for(let i = 0; i < comment.length; i++){
    const commentEl = document.createElement('div');
    commentEl.innerText = comment[i];
    commentListEl.append(commentEl);
};


const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = inputEl.value;

    
    if(inputValue !== ""){
        comment.push(inputValue);

        localStorage.setItem("COMMENT", JSON.stringify(comment));

        const commentEl = document.createElement('div');
        commentEl.innerText = inputValue;
        commentListEl.append(commentEl);

        inputEl.value = '';
    };
};


const togglehandler = (e) => {
    if(heartEl.classList.contains('fa-regular')){
        e.target.parentNode.innerHTML = `<i class="fa-solid fa-heart active"></i>`
    }else{
        e.target.parentNode.innerHTML = `<i class="fa-regular fa-heart"></i>`
    }
    
    heartEl.classList.toggle('fa-regular');
    heartEl.classList.toggle('fa-solid');
    
};


formEl.addEventListener('submit', handleSubmit);

heartEl.addEventListener('click', togglehandler);
