class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }

    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}
module.exports = Employee;

// Remember: "this" refers to the object (see above). Poss blueprint below, too
// const employee = new Employee("heather", "123", "here@here.com");
// employee.getName();
// employee.getId();
// employee.getEmail();