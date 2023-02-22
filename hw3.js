//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
/*Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число. Например: Учитывая [34, 15, 88, 2]
ваше решение вернет 2 Учитывая [34, -345, -1, 100] ваше решение вернет -345 Вы можете предположить, для целей этого ката,
 что массив не будет пустым.*/

class SmallestIntegerFinder {

    findSmallestInt(args) {
        return Math.min(...args);
    };
}

const arr = new SmallestIntegerFinder();
console.log(arr.findSmallestInt([78, 56, 232, 12, 8]));

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
//Эта серия ката познакомит вас с основами компьютерной геометрии. Точечные объекты имеют атрибуты x, y. Круговые
// объекты имеют центр, который является точкой, и радиусом, который является числом. Напишите функцию, вычисляющую
// длину окружности. Тесты округляют ответы до 6 знаков после запятой.
const circle = {
    radius: 10
};

const circleCircumference = circle => 2 * Math.PI * circle.radius;

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
//Задача Функция giveMeFive принимает 1 параметр, obj, который является объектом. Создайте массив (который вы в
// конечном итоге вернете). Затем пройдите obj, проверяя каждый ключ и значение. Если длина ключа равна 5, то нажмите
// ключ в свой массив. Отдельно, если длина значения равна 5, то поместите значение в свой массив. В конце верните свой
// массив. Вы должны использовать for..in в своем коде, иначе ваше решение может не пройти этот ката.

function giveMeFive(obj) {
    const newArray = [];
    for (let key in obj) {
        if (key.length === 5 && obj[key].length === 5) {
            newArray.push(key);
            newArray.push(obj[key]);
        } else if (key.length === 5) {
            newArray.push(key);
        } else if (obj[key].length === 5) {
            newArray.push(obj[key]);
        }
    }
    return newArray;
}

console.log(giveMeFive({Our: "earth", is: "a", beautyful: "world"})); //["earth","world"]
console.log(giveMeFive({Ihave: "enough", money: "to", buy: "a", car: "model"})); //["Ihave","money","model"]
console.log(giveMeFive({Pears: "than", apple: "sweet"})); //["Pears","apple","sweet"]

//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
//Это простое упражнение для понимания функции языка javascript, называемой замыканием. Функция buildFun вернет массив
// функций. Единственным параметром, принимаемым buildFun, является количество элементов N возвращаемого массива.
// Желаемый результат заключается в том, что при выполнении всех функций в массиве должно быть возвращено число
// от 0 до N.

function buildFun(n) {
    let res = []

    for (let i = 0; i < n; i++) {
        res.push(function () {
            return i
        })
    }
    return res
}

console.log(buildFun(10));

//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

let billy = new Shark("Billy", 3, "Alive and well");
console.log(billy)

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status)
    }

    introduce() {
        return super.introduce() + `  Meow meow!`;
    }
}

let cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
console.log(cathy);
console.log(cathy.introduce())


class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;
    }

    introduce() {
        return super.introduce();
    }

    greetMaster() {
        return `Hello ${this.master}`
    }
}

let doug = new Dog("Doug", 12, "Serving his master", "Eliza");
console.log(doug)
console.log(doug.greetMaster())