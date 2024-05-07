#! /usr/bin/env node
import inquirer from "inquirer";
const Currency = {
    USD: 1,
    EUR: 0.93,
    GBP: 0.80,
    KGS: 0.011,
    PKR: 0.0036
};
let use_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Exchange From Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'KGS', 'PKR']
    },
    {
        name: "to",
        message: "Exchange to Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'KGS', 'PKR']
    },
    {
        name: 'Amount',
        message: 'Enter your Amount',
        type: 'number'
    }
]);
let fromAmount = Currency[use_answer.from];
let toAmount = Currency[use_answer.to];
let Amount = use_answer.Amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(Amount);
