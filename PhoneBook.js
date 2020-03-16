const ConsoleReader = require('./ConsoleReader');
const Contact = require('./Contact');
const validation = require('./validation');

const PhoneBook = {
    contacts: [],
    
    async addContact() {
        console.log('Введите имя');
        const name = await ConsoleReader.getLine();
        console.log('Введите номер телефона');
        const phone = await ConsoleReader.getLine();
        const contact = new Contact(name, phone);
        this.contacts.push(contact);
        console.log(`Вы добавили контакт c именем ${Contact.name} с номером ${Contact.phone}`);
    },

    async listContact() {
        console.log(`\n---`);

        for (let i = 0; i < this.contacts.length; i++) {
            const contact = this.contacts[i];
            console.log(`Контакт с именем ${Contact.name} и номером ${Contact.phone}`);
        }

        console.log(`---\n`);
    },

    async deleteContact() {
        console.log('Введите имя контакта, который хотите удалить');
        const name = await ConsoleReader.getLine();
        for (let i = 0; i < this.contacts.length; i++) {
            const contact = this.contacts[i];
            if (contact.name === name) {
                this.contacts.splice(i, 1);
        console.log(`Вы удалили контакт с именем ${name}`);
            } else {
        console.log('Контакта с именем ${name} не существует');
            }
        }
    },

    async searchContact() {
        console.log('Введите имя контакта, который хотите найти');
        const name = await ConsoleReader.getLine();
        for (let i = 0; i < this.contacts.length; i++) {
            const contact = this.contacts[i];
        if (contact.name !== name) {
            console.log('Такого имени нет в телефонной книге');
        } else {
            console.log(`Контакт с именем ${name} и номером ${phoneBook[name]}`);
        }
    }

    }

};

module.exports = PhoneBook;
