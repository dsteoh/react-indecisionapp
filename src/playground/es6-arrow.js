// function square(x) {
//     return x*x;
// };

// console.log(square(3));

// const squareArrow = (x) => {
//     return x*x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));

const fullName = 'De Siang Teoh';

const getFirstName = (fullName) => {
   return fullName.split(' ')[0];
};

const getFirstNameShort = (fullName) => fullName.split(' ')[0];

console.log(getFirstName(fullName));