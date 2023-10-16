// class Person {
//     name = "Mg Mg";
//     age =  24;
//     run() {
//         return "mg mg can run";
//     }
// }

// // class => object (instantiate)

// const person = new Person();

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.run());

class Student {
    //name, gender, major
}
//property
const st1 =  new Student();
st1.name = "Hla Hla";
st1.gender = "Female";
st1.rollNo = 1;
st1.major  = "Medical"

//methods
st1.learn = function() {
    return st1.name + " can learn everything"
}

const st2 =  new Student();
st2.name = "Mg Mg";
st2.gender = "Male";
st2.rollNo = 2;
st2.major = "Electrical Engineer"

//methods
st2.learn = function() {
    return st2.name + " can learn everything"
}

console.log(st1);
console.log(st2.learn());