let employees = []
function Employee (name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    employees.push(Employee)
    this.printEmployeeForm = function () {
        console.log(employees)
    }
}

let rush = new Employee("Rush Crawford", "Developer", 1000000)
let tay = new Employee("Taylor Crawford", "Life Coach", 1000000, )

console.log(rush)