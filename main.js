import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.bgBlueBright.bold(" \n \t wellcome to codewithtayyaba - Todo-list Application\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "Input",
            message: chalk.bgGreenBright("Enter your new task"),
        }
    ]);
    todolist.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo list successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.bgMagenta("Do you want to add more task?"),
            defaut: "false",
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log(chalk.bgYellow("Your updated todo-list:"), todolist);
