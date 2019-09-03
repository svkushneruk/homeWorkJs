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
   savings: false
}


function chooseExpenses() {
   for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце'),
         b = prompt('Во сколько обойдется?');

      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
         console.log("Done");
         appData.expenses[a] = b;
      } else {

      }

   }
}

chooseExpenses();

// let i = 0;
// do {
//    let a = prompt('Введите обязательную статью расходов в этом месяце'),
//       b = prompt('Во сколько обойдется?');

//    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//       console.log("Done");
//       appData.expenses[a] = b;
//       i++;
//    } else {

//    }
// } while (i < 2);


// let i = 0;
// while (i < 2) {
//    let a = prompt('Введите обязательную статью расходов в этом месяце'),
//       b = prompt('Во сколько обойдется?');

//    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//       console.log("Done");
//       appData.expenses[a] = b;
//       i++;
//    } else {

//    }

// }


function detectDayBudget() {
   appData.moneyPerDay = (appData.budget / 30).toFixed(2);
}

detectDayBudget();



alert("Щоденний бюджет: " + appData.moneyPerDay);


function detectLeve() {
   if (appData.moneyPerDay < 100) {
      console.log('Минимальный достаток');
   } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний достаток');
   } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий достаток');
   } else {
      console.log('Произошла ошибка');
   }
}

detectLeve();

function checkSavings() {
   if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
         percent = +prompt("Под какой процент?");

      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
   }
}

checkSavings();


function chooseOptExpenses() {
   for (let i = 0; i < 3; i++) {
      let a = prompt('Статья необязательных расходов?');

      if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
         console.log("Done");
         appData.optionalExpenses[i] = a;
      } else {

      }

   }
}

chooseOptExpenses();