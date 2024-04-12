import inquirer from "inquirer";
let conversion = {
    PKR: {
        USD: 0.0045,
        EUR: 0.0040,
        PKR: 1
    },
    USD: {
        USD: 1,
        EUR: 0.8,
        PKR: 282
    },
    EUR: {
        USD: 1.2,
        EUR: 1,
        PKR: 340
    }
};
function currencyConverter() {
    console.log("Welcome to currency converter");
    inquirer.prompt([
        {
            type: "input",
            name: "amount",
            message: "Enter amount :"
        },
        {
            type: "list",
            name: "from",
            message: "From :",
            choices: ["PKR", "USD", "EUR"]
        },
        {
            type: "list",
            name: "to",
            message: "To :",
            choices: ["PKR", "USD", "EUR"]
        }
    ]).then((answer) => {
        let convertedAmount = conversion[answer.from][answer.to] * answer.amount;
        if (typeof convertedAmount === "number") {
            console.log(answer.amount + " " + answer.from + " = " + convertedAmount + " " + answer.to);
            if (convertedAmount == -1) {
                console.log("Invalid currency");
            }
        }
        else {
            console.log("Invalid amount");
        }
    });
}
currencyConverter();
