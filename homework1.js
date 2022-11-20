// Дан массив с налогами в виде дробного числа
// Используя forEach посчитайте зараплату после налогов
const taxes = {
    vat: 0.20,
    unemployement: 0.016,
    insurance: 0.008,
    pension: 0.002
}

let salary = 2000;

let netSalary = salary;

Object.values(taxes).forEach((item) => {
netSalary = netSalary - salary * item;
});

console.log(netSalary);


// Для каждого человека в заданом массиве выведете строку
// Hello 'name' 'surname'! You are 'age' years old.
const people = [['Jack', 'Smith', 25], ['Mary', 'Gold', 30], ['Sarah', 'Brown', 18], ['Bob', 'Summers', 20]]

people.forEach((item) =>{
    console.log(`Hello ${item[0]} ${item[1]}! You are ${item[2]} years old`)
});

// Задан список чисел и два пустых массива
// Зполните массив primeSquares квадратами чисел
// Так чтобы числа в массиве были в порядке возрастания
// А массив primeCubes кубами чисел
// Так чтобы числа в массиве были в порядке убывания
const primes = [1, 2, 3, 5, 7, 11, 13, 17, 19];
const primeSquares = [];
const primeCubes = [];

primes.forEach((item) => {
primeSquares.push(item ** 2);
});
console.log(primeSquares);

primes.forEach((item) => {
    primeCubes.unshift(item ** 3)
});
console.log(primeCubes);
