// for(let i = 0; i < 10; i++) {
//     if(i == 3){
//         console.log('It is 3');
//         continue;
//     }

//     if(i == 5){
//         console.log('5 Stop the loop');
//         break;
//     }
//     console.log('Number' + i);
// }

// for/in
// const user = {
//     name: 'Han',
//     provience: '경기도',
//     city: '성남시'
// }

// for(let x in user) {
//     console.log(`${x}: ${user[x]}`);
// }

// while
// let i = 1;
// while (i < 10) {
//     console.log('Number ' + i);
//     i++;
// }

// do/while
// let i = 100;

// do {
//     console.log('Number ' + i);
//     i++;
// }while(i < 10);

// Loop Through Array

const locations = ['서울', '부산', '대구', '인천'];

// for문
for(let i = 0 ; i < locations.length; i++) {
    console.log(locations[i]);
}

// forEach문
locations.forEach(function(location, index, array){
    console.log(`${index}: ${location}`);
    console.log(array);
});

// map문
locations.map(function(location, index, array){
    console.log(location);
});