// Write the code as shown in the video below:
const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = "brown";

const fruits = document.querySelectorAll('.fruit');

for (let i = 1; i < fruits.length; i += 2){
    fruits[i].style.backgroundColor = 'brown';
    fruits[i].style.color = 'white'
}
let fruitsClass = document.querySelector('.fruits');
fruitsClass.style.listStyle = 'none';

fruitsClass.style.backgroundColor = 'gray';
fruitsClass.style.padding = '20px';

// Write answer to the questions asked below:
