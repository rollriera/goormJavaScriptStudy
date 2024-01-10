// element 생성
const li = document.createElement('li');

// 클래스 추가하기
li.className = 'list-group-item';

// id 추가하기
li.id = 'new-item';

li.setAttribute('name',  'New list item');

// link element 생성하기
const link = document.createElement('a');

link.className = 'alarm-item';

link.innerHTML = 'hi';

li.appendChild(link);


document.querySelector('ul.list-group').appendChild(li);