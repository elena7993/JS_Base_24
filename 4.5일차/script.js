   
    // document.querySelector("h1");
    // document.querySelector("p");
    // document.querySelector("#text");
    // document.querySelector(".paragraph");

        // document.querySelector
    // =>css선택자를 전달하여 해당 선택자와 일치하는 요소를 반환한다
    // =>문자열 형태로 css선태자를 넣는다

    // console.log(document.querySelector("h1"));
    // console.log(document.querySelector("p"));
    // console.log(document.querySelector("#text"));
    // console.log(document.querySelector(".paragraph"));

    // ------------------------------------------------------------

     // document.getElementById
    // =>id가 있는 요소만 선택자를 찾아 반환한다

    // console.log(document.getElementById("text"));
    // =>#은 빼고 넣어야함

    // console.log(document.getElementById("p"));
    // =>null 이라고 나옴

    // -------------------------------------------------------------

    // textContent
    // =>이 속성은 노드가 포함하고 있는 텍스트 콘텐츠를 표현하는 속성
    // =>textContent를 통해 요소가 포함된 텍스르를 읽을수도 변경할 수도 있다


    // const title = document.querySelector("h1");
    // const text = document.getElementById("text");

    // console.log(title.textContent);
    // title.textContent = "이렇게 바꿀 수 있답니다!"


    // text.textContent = "바뀌니까 정말 신기하지????!!!"
    // console.log(text.textContent);

    // --------------------------------------------------------------

    // 반복문 while
    // =>주어진 조건이 참일 동안에 구문을 반복한다
    // =>while(조건){조건이 true인 동안에 반복 수행 할 코드}

    // let number = 1;

    // while(number < 9){
    //   console.log(number);
    //   number +=1;
    // }

    //  confirm("이게 뭔지 아나요?")
     
    // console.log(confirm("이게 뭔지 아나요?"));
    // =>확인누르면 콘솔에->true
    // =>취소누르면 콘솔에->false
    // =>즉 컨펌메소드가 띄어주는 다이얼로그 창도 조건으로 사용할 수 있다

    // while(confirm("무슨 버튼을 선택할래?")){
    //   document.write("확인 버튼을 계속 누르고 있었지!");
    // }

    // document.write("결국 취소 버튼을 눌렀구나ㅋㅋㅋ!");

    // ----------------------------------------------------------------
  //  *함수 선언식
    // function 함수명() {
    //   함수의 기능을 표현한 구문
    // }

    // =>호이스팅이 가능하다(함수호출이 위에 있어도 괜춘!)

  //   *함수 표현식
  //   const 함수명 = function() {
  //   함수의 기능을 표현한 구문 
  //  }


  //  function sayHello() {
  //   console.log("Hello")
  //   console.log("안녕")
  //  }

  //  sayHello();
  //  sayHello();
  //  =>함수 호출문


  // const sayBye = function() {
  //   console.log("good bye~~")
  // }

  // sayBye();

  // function sayHello() {
  //   let hello = "문자열 헬로우로우"
  //   console.log(hello);
  // }

  // =>함수내부에서 변수를 만들어서 사용가능
  // =>단, 함수 내부에서 선언한 변수는 함수 바깥에서 사용할 수 없다!!!

  // function thereIsReturn() {
  //   console.log("반환한다. 너를!")
  //   return 10;
  // }
  
  // const result = thereIsReturn();
  // console.log(result);

  // 1.매개변수도 없고, 리턴도 없는 함수

  // function sayAnything(){
  //   console.log("나는 정말정말 자고 싶어요.. 잠이 와요...");
  // }

  // sayAnything();
  // sayAnything();

  // 2.매개변수와 인자추가

  // function sayAnything(ant, number){
  //   for(let i = 0; i < number; i++){
  //     console.log(ant)
  //   }
  //   // console.log(ant);
  //   // =>매개변수추가하고 콘솔에 넣음!
  // }

  // sayAnything("오예 음 오 아 예~ ", 6);
  // sayAnything("안-녕 이라고 내게 말하지마~~~",2);
  // =>인자전달함!

  // function oddEven(number){
  //   if(number % 2 === 0){
  //     return "짝수"
  //   }else{
  //     return "홀수"
  //   }
  // }

  // console.log(oddEven(7));
  // console.log(oddEven(16));

  // ----------------------------------------------------------------

  //  *이벤트핸들러 등록

  // const inputType = document.querySelector("#typing");
  // const InputClick = document.querySelector("#push");

  // const handleTyping = function(){
  //   console.log("타이핑 되고 있습니닷!");
  // }

  // const handleClick = function(){
  //   console.log("클릭되고 있습니닷!")
  // }

  // inputType.onkeydown = handleTyping
  // InputClick.onclick = handleClick

  // =>onkeydown: 키보드가 눌렀을 때라는 이벤트 속성 
  // =>따라서 키보드를 눌렀을 때 handleTyping 이라는 함수가 콘솔에 실행된다! 

  
  // *addEventListener
  // =>이벤트핸들러를 여러개 등록할 수 있다 
  // =>이벤트핸들러를 제거하는 대응메소드를 제공한다 

  // const btn1 = document.getElementById("one");
  // const btn2 = document.getElementById("two");
  // const btn3 = document.getElementById("three");

  // const handleClick = function() {
  //   console.log("저를 클릭하셨나용??");
  // }

  // btn2.addEventListener('click', handleClick);
  // =>첫번째 인자는 발생할 수 있는 인자, 두번째는 이벤트 함수
  // btn2.addEventListener('click', function(){
  //   console.log("또 다른 핸들러가 추가 등록 될 수 있지!")
  // });
  
  // =>새로운 익명함수를 인자로 전달 가능!!

  // btn2.removeEventListener('click', handleClick);
  
  // const handleClick = function(event){
  //   console.log(event.target)
  // }

  // btn1.addEventListener('click', handleClick);
  // btn2.addEventListener('click', handleClick);
  // btn3.addEventListener('click', handleClick);

  // => event.target은 지금 이벤트가 발생한 순간에 타겟을 알려주기 때문에
  // 똑같은 handleClick을 넣어도 콘솔에 출력된 값은 다르다! 

  // ----------------------------------------------------------------

  // const button = document.getElementById("push");
  // const div = document.getElementById("area");

  // button.addEventListener('click', function(){
  //   console.log("div, 생성 중!");
  //   document.createElement("div");
  // })

  // =>실제 렌더링되는 돔안에는 추가 되지 않음
  // =>따라서 돔에서 추가하는 작업 필요 -> createElement된 요소를 append 한다.
  // =>append되는 대상은 area안에다가 새롭게 만들어진 div들을 append 해준다

  //   const button = document.getElementById("push");
  //   const div = document.getElementById("area");

  //   button.addEventListener('click', function(){
  //   console.log("div, 생성 중!");
  //   const newDiv = document.createElement("div");

  //   newDiv.style.backgroundColor = "red"
  //   newDiv.style.width = "200px"
  //   newDiv.style.height = "200px"

  //   div.appendChild(newDiv);
  //  })

  //  append와 appendChild
  //  =>둘 다 요소를 추가하는면서는 같다
  //  =>append는 문자열에 대한 추가가 가능하다 /appendChild는 문자열 추가 안되고 돔 요소(노드)만 가능하다
  //  =>console.log(dive.appendChild(newDiv));라고 넣으면 반환해주고 콘솔에 출력도 해준다 / append는 반환값이 정의되지 않음

  // ------------------------------------------------------------------

  // const textInput = document.getElementById("text");
  // const button = document.getElementById("button");

  // button.addEventListener('click', function(){
  //   console.log(textInput.value)
  // })
  // =>여기서 value가 바로 사용자 입력값을 의미함!
  // =>입력창에 무언가를 입력하게 되면 콘솔에 출력됨

  //   button.addEventListener('click', function(){
  //     textInput.value = "클릭하면 이렇게 바뀐다구!"
  // })

  // =>value에다 값을 입력하면 값을 바로 바꿀 수도 있다
  // =>푸쉬버튼을 누르면 "클릭하면 이렇게 바뀐다구!" 이 텍스트가 바로 나옴 

  // const form = document.querySelector("form");

  // form.addEventListener('submit', function(e){
  //   e.preventDefault()
  //   console.log(form.name.value);
  //   console.log(form.town.value);
  // })

  // =>form안에서 name은 요소에 대한 접근자로서 식별자로서의 역할을 함 

  // =>form에서 submit이벤트가 발생하면 리다이렉션 이벤트가 발생하기 때문에
  // preventDefault을 통해서 방지할 수 있다 
  // ...어렵다...

  // ------------------------------------------------------------------

  // *삼항연산식

  // let result;

  // result = 3 > 2 ? "true" : "false"

  // console.log(result);

  // const select = document.querySelector('select');
  // const button = document.querySelector('button');

  // button.addEventListener('click', function(){
  //   console.log(select.value)
  //   let result;
  //   result = select.value == "foot" ? "축구 선택했네!" : "축구 선택안했네?"
  //   alert(result);
  // })

  // -------------------------------------------------------------------

  // setTimeout(function(){
  //   console.log(1234)
  // }, 2000)

  // =>2초뒤에 콘솔에 1234가 출력됨 
  // =>한번 실행하고 끝! 

  // let interId;

  // interId = setInterval(function(){
  //   console.log("Hello")
  // }, 2000)

  // console.log(interId);

  // =>주어진 시간마다 계속해서 함수를 실행함
  // =>자신의 id를 반환함 (0이 아닌 램덤 숫자를 반환)

  // const button = document.querySelector("button")
  
  // let interId;

  // interId = setInterval(function(){
  //   console.log("Hello")
  // }, 2000)

  // console.log(interId);

  // button.addEventListener('click', function(){
  //   clearInterval(interId);
  // })

  // =>셋인터벌로 등록한 타이머를 멈출 수 있다 

  // ------------------------------------------------------------------

  const h1 = document.querySelector("h1");
  const addBtn = document.querySelector("#add");
  const removeBtn = document.querySelector("#remove");
  const toggleBtn = document.querySelector("#toggle");

  // =>classList는 요소가 가지고 있는 클래스를 목록을 반환해 준다 

  // console.log(h1.classList)
  // =>클래스가 없으므로 값이 엄따!ㅋ
  
  addBtn.addEventListener('click', function(){
    h1.classList.add('text');
  })
  // =>add는 주어진 문자열값을 클래스로 추가한다

  removeBtn.addEventListener('click', function(){
    h1.classList.remove('text');
  })
  // =>텍스트라는 클랙스가 있으면 삭제한다 

  toggleBtn.addEventListener('click', function(){
    h1.classList.toggle('text');
  })
  // =>toggle은 있으면 제거하고 없으면 만든다~~ 

  // ------------------------------------------------------------------





  
