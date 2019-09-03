'use strict';

let money, time;

function start() {
   money = +prompt("Ваш бюджет на месяц?", '');
   time = prompt("Введите дату в формате YYYY-MM-DD", '');

   while (isNaN(money) || money == '' || money == null) {
      money = +prompt("Ваш бюджет на месяц?", '');
   }
}

start();


var appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false,
   chooseExpenses: function() {
      for (let i = 0; i < 2; i++) {
         let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = prompt('Во сколько обойдется?');
   
         if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("Done");
            appData.expenses[a] = b;
         } else {
   
         }   
      }
   },
   detectDayBudget: function() {
      appData.moneyPerDay = (appData.budget / 30).toFixed(2);
      alert("Щоденний бюджет: " + appData.moneyPerDay);      
   },
   detectLevel: function() {
      if (appData.moneyPerDay < 100) {
         console.log('Минимальный достаток');
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
         console.log('Средний достаток');
      } else if (appData.moneyPerDay > 2000) {
         console.log('Высокий достаток');
      } else {
         console.log('Произошла ошибка');
      }
   },
   checkSavings: function() {
      if (appData.savings == true) {
         let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
   
         appData.monthIncome = save / 100 / 12 * percent;
         alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
      }
   },
   chooseOptExpenses: function() {
      for (let i = 0; i < 3; i++) {
         let a = prompt('Статья необязательных расходов?');
   
         if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
            console.log("Done");
            appData.optionalExpenses[i] = a;
         } else {
   
         }   
      }
   },
   chooseIncome: function() {
      let items = prompt('что принесет дополнительный доход?', '');
      appData.income = items.split(', ');
      appData.income.push(prompt('Может быть что то еще?'));
      appData.income.sort();
   }
}