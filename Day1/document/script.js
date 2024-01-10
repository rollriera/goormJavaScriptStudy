// let val;

// val = document;

// val = document.baseURI; // 웹 페이지의 절대 URI를 반환
// val = document.head; // <head>태그를 반환
// val = document.body; // <body>태그를 반환

// val = document.forms; // <form>태그들을 반환
// val = document.forms[0].id; // <form>태그의 첫번째 위치의 id값을 반환
// val = document.forms[0].classList; // 특정위치의 <form>태그의 클래스의 목록을 반환
// val = document.forms[0].className; // 특정위치의 <form>태그의 클래스명을 반환

// val = document.scripts[1].getAttribute('src'); // <script>태그를 반환

const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none';

// console.log(headerContainer);

headerContainer.textContent = 'Text Content';
headerContainer.innerText = "Inner Text";
headerContainer.innerHTML = "<span>Inner HTML</span>";

const items = document.getElementsByClassName('list-group-item');
// console.log(items);

items[0].style.color = 'blue';
items[2].textContent = 'hi';

let lists = document.getElementsByTagName('li');
console.log(lists);

// lists.forEach((list) => {
//     console.log(list)
// }) // 사용불가

lists = Array.from(lists);

console.log(lists);

lists.forEach((list, index) => {
    list.textContent = `${index}. List`;
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach((li) => {
    li.style.background = 'gray';
})

