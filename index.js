'use strict'

const ConsoleReader = require('./ConsoleReader');
const Notebook  = require('./Notebook');
const Contact = require('./Contact');
const chalk = require('chalk');
const phonebookStorage = require('./phonebookStorage');
const validation = require('./validation');

const notebook = new Notebook(phonebookStorage);

const main = async () => {
    console.log(chalk.bgRedBright('Выберите действие.\n\nadd - добавить\nlist - список\ndelete - удалить\nsearch - найти\n\nДля выхода используйте команду - exit\n'));
    const command = await ConsoleReader.getLine();
    if (command === 'exit') {
        process.exit(0);
    } else if (command === 'add') {
        await notebook.addContact();
    } else if (command === 'list') {
        await notebook.listContact();
    } else if (command === 'delete') {
        await notebook.deleteContact();
    } else if (command === 'search') {
        await notebook.searchContact();
    } else if (command === 'size'){
        await Notebook.getSizeNotebook(phonebookStorage);
    } else {
        console.log('Неизвестная команда');
    }

    main();
};

main();


