const Employee = require("./Employee")

class Manager extends Employee{
    constructor (name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber (){
        return this.officeNumber
    }
    getRole (){
        return "Manager"
    }
}
module.exports=Manager

// This will add a method to a constructor. Define methods - use below example
// class Intern extends Employee {
//     constructor(Manager's requirements from README) {
//         super(Manager's requirements from README)
//         this.school = school;
//     }
// Remember: "this" refers to the object