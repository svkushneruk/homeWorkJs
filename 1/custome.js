'use strict';

var money = +prompt("Ваш бюджет на месяц?", '');
var time = prompt("Введите дату в формате YYYY-MM-DD", '');
var answer1 = prompt('Введите обязательную статью расходов в этом месяце'),
   answer2 = prompt('Во сколько обойдется?'),
   answer3 = prompt('Введите обязательную статью расходов в этом месяце'),
   answer4 = prompt('Во сколько обойдется?');

var appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
}

appData.expenses[answer1] = answer2; 
appData.expenses[answer3] = answer4;

console.log(appData);

alert(money / 30);