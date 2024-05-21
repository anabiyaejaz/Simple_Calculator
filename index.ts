#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "Firstnumber"},
    {messagr: "Enter Second Number", type:"number", name: "Secondnumber"},

    {message: "Please select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },

]); 

if (answer.operator == "Addition"){
    console.log(answer.Firstnumber + answer.Secondnumber)

}else if (answer.operator == "Subtraction"){
    console.log(answer.Firstnumber - answer.Secondnumber)

}else if (answer.operator ==  "Multiplication"){
    console.log(answer.Firstnumber * answer.Secondnumber)

}else if (answer.operator == "Division"){
    console.log(answer.Firstnumber / answer.Secondnumber)

}else {
    console.log("Select the valid operator")
}