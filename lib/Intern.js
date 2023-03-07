// import parent Employee class
const Employee = require('../lib/Employee');

// define Intern subclass that inherits from Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        // call parent constructor with super
        super(name, id, email);

        // add school property to Intern instances
        this.school = school;
    }

    // add getSchool method to Intern instances
    getSchool() {
        return this.school;
    }

    // override getRole method inherited from Employee
    getRole() {
        return 'Intern';
    }
};

// export Intern subclass
module.exports = Intern;
