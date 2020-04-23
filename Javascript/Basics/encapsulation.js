//Procedural program
let basicSalary = 30000;
let overTime = 10;
let rate = 20;

function getWage(basicSalary, overTime, rate) {
    return basicSalary + (overTime * rate);
}


//Object-oriented program
let person = {
    basicSalary: 40000,
    overTime: 20,
    rate: 40,

    newWage: function() {
        return this.basicSalary + (this.overTime * this.rate);
    }
}

console.log(getWage(basicSalary, overTime, rate));
console.log(person.newWage());