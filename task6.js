const numbers = [];
let total = 0;
let input;

  do {
    input = prompt('Напишите число');
    total += Number(input);
    numbers.push(input);
} while (input !== null);

console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`)