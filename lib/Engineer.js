const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer"
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}
module.exports = Engineer;


//
// class Engineer extends Employee {
//     constructor(Engineer's requirements from README) {
//         super(Engineer's requirements from README)
//         this.github = github;
//         this.role = "Engineer"
//     }
