// Question No.3
function Student(userName,rollno,className,type){
    this.name = userName,
    this.rollNo = rollno,
    this.class = className,
    this.isOpen = type
}

var std = new Student("jhon", 123, "sunday" , true);
var std1 = new Student("hello", 432, "monday" , false);
var std2 = new Student("ali", 675, "friday" , true);

console.log(std);
console.log(std1);
console.log(std2);

// Question no.4
var user = {
    name: "Shehryar",
    email: "sherrie@.com",
    password: "12qw",
    age: 17.5,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
};


console.log("'age' exists:", "age" in user);
console.log("'country' exists:", "country" in user);


console.log("'firstName' exists:", "firstName" in user);
console.log("'lastName' exists:", "lastName" in user);
