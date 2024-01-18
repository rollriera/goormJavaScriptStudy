// window.onload = function() {
    
//     // 문서가 load 될때 이 함수를 실행
//     let text = document.getElementById("text");

//     //아이디가 "text"인 요소를 return
//     text.innerText = "HTML 문서 loaded";
// }

// const aElement = document.querySelector("a");

// aElement.addEventListener("click", () => {
//     alert('a element clicked');
// })

// const buttonElement = document.querySelector('.btn2');

// buttonElement.addEventListener('click', (event) => {
//     let val;
//     val = event.target;
//     val = event.target.id;
//     val = event.target.className;
//     val = event.target.classList;

//     val = event.type;

//     // 윈도우로부터의 거리 좌표
//     val = event.clientY;

//     // 요소로부터의 거리
//     val = event.offsetY;

//     console.log(val);
// })

// const submitBtn = document.querySelector('.submit-btn');
// const form = document.querySelector('form');
// const title = document.querySelector('h2');

// // Click EVENT
// // 클릭했을때
// submitBtn.addEventListener('click', handleEvent);
// // 두번 클릭했을때
// submitBtn.addEventListener('dblclick', handleEvent);
// // 요소를 클릭했을때
// submitBtn.addEventListener('mousedown', handleEvent);
// // 클릭한 마우스를 놓았을때
// submitBtn.addEventListener('mouseup', handleEvent);
// // 커서를 요소에 올려놓았을때
// submitBtn.addEventListener('mouseenter', handleEvent);
// // 커서를 해당 이벤트 요소 위에 올려져 있을때 요소 위에서 움직일때 한정으로 계속 발생
// submitBtn.addEventListener('mouseleave', handleEvent);
// // 해당 이벤트 요소 밖으로 벗어날때 발생
// submitBtn.addEventListener('mousemove', handleEvent);

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title = document.querySelector('h2');

// Form EVENT
form.addEventListener('submit', handleEvent);

// 발생 순서 keydown -> input -> keyup

// 해당 input에 키보드가 눌려있을때 문자키, 제어키, 기능키 의 발생을 가져옴
emailInput.addEventListener('keydown', handleEvent);
// 해당 input에 누르고있는 키보드를 땟을때
emailInput.addEventListener('keyup', handleEvent);
// keydown과 비슷하지만 제어키나 기능키에 대해선 발생하지 않음
emailInput.addEventListener('keypress', handleEvent);
// 해당 요소 포커싱
emailInput.addEventListener('focus', handleEvent);
// 포커싱된 요소의 다른곳을 클릭하면
emailInput.addEventListener('blur', handleEvent);
// 잘라내기할때
emailInput.addEventListener('cut', handleEvent);
// 붙여넣기 할때
emailInput.addEventListener('paste', handleEvent);
// input의 요소값이 변경됫을때
emailInput.addEventListener('input', handleEvent);


function handleEvent(e) {
    if(e.type == 'submit') {
        e.preventDefault();
    }

    console.log(`Event Type: ${e.type}`);
    // title.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    title.textContent = e.target.value;
}