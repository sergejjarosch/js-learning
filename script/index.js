




const number = [1,2,3,4,5,6];

const squares = number.map(function (element){
    return Math.pow(element, 2);
});

const cubes = number.map(function (element){
    return Math.pow(element, 3);
});


const evenNums = number.filter(function (element){
    return element % 2 === 0;
})

const oddNumbers = number.filter(function (element){
    return element % 2 !== 0;
})

const total = number.reduce(function (accumulator, element) {
    return accumulator + element;
})

console.log(total);

