import inquirer from "inquirer";
let myBalance = 0;
let isContinue = true;
const pinCode = 1234;
const message = "welcome to ATM";
console.log(message);
let pin_answer = await inquirer.prompt({
    type: "number",
    name: "answer",
    message: "please enter pin code:"
});
if (pin_answer.answer === 1234)
    do {
        let answer = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "select any option",
            choices: ["Deposite", "withdraw", "fast cash", "balance check"],
        });
        //--------------------Deposite---------------------------
        if (answer.list === "Deposite") {
            let answer = await inquirer.prompt({
                type: "number",
                name: "Deposite_amount",
                message: "please enter your amount:",
            });
            if (answer.Deposite_amount > 0) {
                myBalance = myBalance + answer.Deposite_amount;
                console.log(myBalance);
            }
        }
        //--------------withdraw------------------------------
        else if (answer.list === "withdraw") {
            let answer = await inquirer.prompt({
                type: "number",
                name: "withdraw_amount",
                message: "please enter amount",
            });
            if (answer.withdraw_amount <= myBalance) {
                myBalance = myBalance - answer.withdraw_amount;
                console.log(myBalance);
            }
            else {
                console.log("not enough money");
            }
        }
        //----------------fast cash---------------------
        else if (answer.list === "fast cash") {
            let answer = await inquirer.prompt({
                type: "list",
                name: "fast_cash",
                message: "please select one",
                choices: ["500", "1000", "2000"],
            });
            if (answer.fast_cash <= myBalance) {
                if (answer.fast_cash === "500") {
                    myBalance -= answer.fast_cash;
                    console.log(myBalance);
                }
                else if (answer.fast_cash === "1000") {
                    myBalance -= answer.fast_cash;
                    console.log(myBalance);
                }
                else if (answer.fast_cash === "2000") {
                    myBalance -= answer.fast_cash;
                    console.log(myBalance);
                }
            }
        }
        //-------------check balance------------
        else if (answer.list === "balance check") {
            console.log(`your balance is: ${myBalance}`);
        }
        //-------------while condition--------------
        let while_answer = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "do you want to continue: ",
        });
        if (while_answer.condition === false) {
            isContinue = false;
        }
    } while (isContinue);
