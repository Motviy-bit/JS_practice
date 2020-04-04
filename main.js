let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = prompt('Во сколько обойдется?”');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
        && a !== '' && b !== '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка')
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log("Произошла ошибка")
}

/*let i = 0;
do {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = prompt('Во сколько обойдется?');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
        && a !== '' && b !== '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }
    i++
}

while (i < 2);*/

/*let i = 0;

while (i < 2) {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = prompt('Во сколько обойдется?');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
        && a !== '' && b !== '' && a.length <50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log('bad result');
        i--;
    }
    i++
}*/

let calc = (a, b) => a+b

console.log(calc(3,4))

function retVar() {
    let num = 50;
    return num;
}


let anotherNum = retVar();
console.log(anotherNum);

function calc1(a, b) {
    return (a + b);
}

console.log(calc1(a, b))

let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
