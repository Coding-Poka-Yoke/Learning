//Base class
class Book {

     setnamme(name) {
         this.name = name;
     }

     startedOn() {
         console.log("Started to read " + this.name);
     }

     completedOn() {
         console.log("Completed reading " + this.name);
     }
}

//Derived class
class Favorite extends Book {

    noOfTimes(count) {
        console.log("Have read my favourite book " + this.name + " for " + count + " times.");
    }
}

console.log("~ Inheritance Program ~");
let myBook = new Favorite();
myBook.setnamme('Bible');
myBook.startedOn();
myBook.completedOn();
myBook.noOfTimes(100);