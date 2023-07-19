//override the status to contract for Miller
//push all employees into the employees array
//get the printEmployeeForm

let employees = []

function Employee (name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function(){
        console.log(this.name, this.jobTitle, this.salary, this.status,)
    }
}

let rush = new Employee("Rush Crawford", "Developer", 1000000)
let tay = new Employee("Taylor Crawford", "Life Coach", 1000000)
let miller = new Employee("Miller Crawford", "Director", 1000000)
rush.status = "Contract"
employees.push(rush, tay, miller)
rush.printEmployeeForm()
tay.printEmployeeForm()
miller.printEmployeeForm()

//console.log(employees)
//printEmployeeForm(rush)
//employees.push(rush, tay, miller)

