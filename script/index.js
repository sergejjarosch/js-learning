

const word = ["apple", "orange", "banana", "kiwi", "pomegranate" , "coconut"];
const shortWords = word.filter(getShortWords);
console.log(shortWords);
function  getShortWords(element){
    return element.length <= 6;
}