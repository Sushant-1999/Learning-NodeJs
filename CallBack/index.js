
function FindOddNum(number) {
    return number % 2;
}

let numbers = [1,2,3,4,5,6,7,8,9];
const oddNumbers = numbers.filter(FindOddNum);
console.log(oddNumbers)


