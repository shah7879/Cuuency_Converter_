#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber: number = Math.floor(10000+Math.random() * 90000);

let myBalance:number = 0;
let answer = await inquirer.prompt(
    [
        {
            name: "student",
            type: "input",
            message: "enter student name:",
            validate: function(value){
                if (value.trim()!== ""){
                    return true;
                }
                return "please enter a non empty value"
            },
        },
        {
            name: "courses",
            type: "list",
            message: "select the course to enrolled",
            choices: ["Ms.office","HTML","javascript","Typescrpt","Python"]
        }
    ]
);
const tutionFee: {[key:string]:number} = {
    "Ms.office": 2000,
    "HTML": 2500,
    "Javascript": 5000,
    "Typscript": 6000,
    "Python": 10000
} 
console.log(`\nTution fees ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "Payment",
        type: "list",
        message: "select payment method",
        choices: ["Bank transfer","easyPaisa","JazzCash"]
    },
    {
        name: "amount",
        type: "input",
        message: "transfer mony",
        validate: function(value){
            if(value.trim() !== " " ){
                return true;
            }
            return "please enter a non empty value";
        },
    }
]

);
console.log(`\nselect payment method ${paymentType.payment}`);

const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);

if(tutionFees === paymentAmount){
    console.log(`Congratulations, you have succesfully enrolled in ${answer.courses}\n`);
    let ans = await inquirer.prompt([
        {
          name: "select",
          type: "list",
          message: "what would you like to do next?",
          choices: ["view status","exit"]
        }
    ])
    if(ans.select === "view status"){
        console.log("\n********view status*******");
        console.log(`student name: ${answer.student}`);
        console.log(`student id: ${randomNumber}`);
        console.log(`course: ${answer.courses}`);
        console.log(`tution fees paid:${paymentAmount}`);
        console.log(`Balance:${myBalance += paymentAmount}`);   
    }else {
        console.log("\nexiting student management system\n");
        
    }

}else {
    console.log("invalid amount due to course\n");
    
}



    
        

        
    



  
    



