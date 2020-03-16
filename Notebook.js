const ConsoleReader = require('./ConsoleReader');
const Contact = require('./Contact');


class Notebook {



    constructor(phonebookStorage) {
        this.phonebookStorage = phonebookStorage;
    }


    async addContact() {
        console.log('Введите имя');
        const name = await ConsoleReader.getLine();
        console.log('Введите номер телефона');
        const phone = await ConsoleReader.getLine();
        const contact = new Contact(name, phone);
        this.phonebookStorage.push(contact);
        console.log(`Вы добавили контакт c именем ${contact.name} с номером ${contact.phone}`);
    }

    async listContact() {
        console.log(`\n---`);

        for (let i = 0; i < this.phonebookStorage.length; i++) {
            const contact = this.phonebookStorage[i];
            console.log(`Контакт с именем ${contact.name} и номером ${contact.phone}`);
        }

        console.log(`---\n`);
    }

    async deleteContact() {
        console.log('Введите имя контакта, который хотите удалить');
        const name = await ConsoleReader.getLine();
        for (let i = 0; i < this.phonebookStorage.length; i++) {
            const contact = this.phonebookStorage[i];
            if (contact.name === name) {
                this.phonebookStorage.splice(i, 1);
        console.log(`Вы удалили контакт с именем ${name}`);
            } else {
        console.log(`Контакта с именем ${name} не существует`);
            }
        }
    }

    async searchContact() {
        console.log('Введите имя контакта, который хотите найти');
        const name = await ConsoleReader.getLine();
        for (let i = 0; i < this.phonebookStorage.length; i++) {
            const contact = this.phonebookStorage[i];
        if (contact.name !== name) {
            console.log('Такого имени нет в телефонной книге');
        } else {
            console.log(`Контакт с именем ${name} и номером ${phoneBook[name]}`);
        }
    }

    }
    static getSizeNotebook(phonebookStorage){
        console.log(phonebookStorage.length);
    }
}



module.exports = Notebook;