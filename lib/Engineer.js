// import parent
const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call parent here
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;
