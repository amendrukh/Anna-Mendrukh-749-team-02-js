//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// Сделать число отрицательным, даже если дано отрицательное число
function makeNegative(num) {
    return num >= 0 ? -num : num;
}

console.log(makeNegative(-4));
console.log(makeNegative(4));

//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
// вывести сумму всех голов Месси в разных лигах
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(10, 10, 5));

//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
/*Cоздать переменную, которая обозначает положение игрока в игре. При этом значения хода *2
 и к этим данным прибавляется текущая позиция игрока.*/
function move(position, roll) {
    return position += roll * 2;
}

console.log(move(1, 5));

//https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
/* Написать функцию, которая выдает персонализированное приветствие. Если ФИО совпадает с ФИО владельца - "Hello boss",
в противном случае  "Hello guest"
*/
function greet(name, owner) {
    return name === owner ? `Hello boss` : `Hello guest`;
}

//https://www.codewars.com/kata/keep-hydrated-1/train/javascript
/*Натан за час езды на велосипеде выпивает 0,5л воды. Дано время в часах, нужно высчитать сколько литров воды Натан
выпил за данное время езды с округлением к меньшему значению */
function litres(time) {
    const litersOnHour = 0.5;
    return Math.floor(litersOnHour * time);
}

console.log(litres(5));

//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
/*Вернуть true если количество лепестков одного цветка четное, а второго не четное и наоборот*/
function lovefunc(flower1, flower2) {
    return !!(!(flower1 % 2) && (flower2 % 2) || !(flower2 % 2) && (flower1 % 2));
}

console.log(lovefunc(1, 4));//1 true
console.log(lovefunc(2, 2));//0 false
console.log(lovefunc(0, 1));//0 true
console.log(lovefunc(0, 0));// NaN false