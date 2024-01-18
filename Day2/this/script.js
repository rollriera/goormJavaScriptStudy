// Method => Object

// const audio = {
//     title: 'a',
//     play(){
//         console.log('play this', this);
//     }
// }

// audio.play();

// audio.stop = function () {
//     console.log('stop this', this);
// }

// audio.stop();

// Function => Window Object
// function playAudio() {
//     console.log(this);
// }

// playAudio();

// Constructor Function => {}
// function Audio(title) {
//     this.title = title;
//     console.log(this);
// }

// const audio = new Audio('a');

// const audio = {
//     title: 'audio',
//     categories: ['rock', 'pop', 'hiphop'],
//     displayCategoryies() {
//         this.categories.forEach(function(category) {
//             console.log(`title: ${this.title}, category: ${category}`);
//         }, this)
//     }
// }

// audio.displayCategoryies();

// 화살표 함수 => this 항상 상위 스코프의 this를 가리키게 된다.
const audio = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategoryies() {
        this.categories.forEach((category) => {
            console.log(this);
        })
    }
}

audio.displayCategoryies();
