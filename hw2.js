//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
//Напишите функцию, которая разбивает строку и преобразует ее в массив слов.
function stringToArray(string) {
    return string.split(" ");
}

stringToArray("I love arrays they are my favorite");
stringToArray("Robin Singh");

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
//Создайте функцию, которая переводит заданную строку ДНК в РНК. T => U
function DNAtoRNA(dna) {
    return dna.replaceAll(/T/gi, "U");
}

DNAtoRNA("TTTT");

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//Вернуть из массива наибольшее и наименьшее число
let minMean = function (list) {
    list.sort((a, b) => a - b);
    return list[0];
}

let max = function (list) {
    list.sort((a, b) => b - a);
    return list[0];
}

minMean([-52, 56, 30, 29, -54, 0, -110]);//-110
max([4, 6, 2, 1, 9, 63, -134, 566]);//566

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
//Напишите функцию, которая может возвращать наименьшее значение массива или индекс этого значения.
const min = (arr, toReturn, minArr = Math.min(...arr)) =>
    toReturn === "value" ? minArr : arr.indexOf(minArr);

console.log(min([1, 2, 3, 4, 5], 'value'));
console.log(min([1, 2, 3, 4, 5], 'index'));

const squareDigits = (num) => {
    const array = num.toString().split("").map((el) => Number( el * el));
    return  Number(array.join(""));
}

squareDigits(1256)

function findOutlier(integers) {
    let odd = [];
    let even = [];
    integers.forEach((el) => {
        if (el % 2 === 0) {
            odd.push(el)
            console.log(`Odd: ${odd}`)
        } else {
            even.push(el);
            console.log(`Even: ${even}`)
        }
    })
    console.log(`Odd: ${odd}`)
    if (odd.length === 1) {
        return odd[0]
    } else {
        return odd[0]
    }
}

console.log(findOutlier([0, 1, 2]));//1
console.log(findOutlier([1, 2, 3]));//2