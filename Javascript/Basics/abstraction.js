//constructor, created without creating a class
function Employee(name, age, basicSalary) {
    this.name = name;
    this. age= age;
    this.basicSalary = basicSalary;

    // Function variable - scope is only with in this function and variable is out of scope outside the function 
    let monthlyBonus = 2000;

    //scope will be only inside this function
    let calculateFinalSalary = function () {
        let finalSalary = basicSalary + monthlyBonus; 
        console.log("Final Salary is : " + finalSalary);   
    }

    this.showEmployeeDetails = function () {
        console.log( "Name : " + this.name + " | Age : " + this.age);
        calculateFinalSalary();
    }
}

console.log("~ Abstraction Program ~");
let emp = new Employee('Naveena', 30, 5000);
emp.showEmployeeDetails();