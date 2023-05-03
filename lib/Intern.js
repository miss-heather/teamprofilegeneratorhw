const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.role = "Intern"
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}
module.exports = Intern
 

// This will add a method to a constructor. Define methods - use below example
// class Intern extends Employee {
//     constructor(Intern's requirements from README) {
//         super(Intern's requirements from README)
//         this.school = school;
//     }