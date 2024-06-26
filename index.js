#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar;
let myPin = 1234;
console.log(`Your total balance is : ${myBalance}`);
console.log(`Your pin code is ${1234}`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin Number:",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select one option:",
            choices: ["withdraw", "fastcash", "check balance"],
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount:",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient amount!");
        }
        //  = , -= , += : ASSIGNMENT OPERATORS;
        else {
            let amountLeft = myBalance - amountAns.amount;
            console.log(`The Remaining balance is: ${amountLeft}`);
            console.log("Thank You!");
        }
    }
    else if (operationAns.operation === "fastcash") {
        let fastcashAmountAns = await inquirer.prompt([
            {
                name: "fastcashAmount",
                type: "list",
                message: "Select one option:",
                choices: ["2500", "5000", "7500", "10000"]
            }
        ]);
        if (myBalance - fastcashAmountAns.fastcashAmount) {
            let leftAmount = myBalance - fastcashAmountAns.fastcashAmount;
            console.log(`The remaining balance is ${leftAmount}`);
            console.log("Thank You!");
        }
        else {
            fastcashAmountAns.fastcashAmount > myBalance;
            console.log(`insufficient amount!`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your total balance is  ${myBalance}`);
    }
    ;
}
else {
    console.log("Incorrect Pin code");
}
;
