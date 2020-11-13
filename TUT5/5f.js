class Person{
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }
}
class Student extends Person{

    constructor(id,firstName,lastName,grades) {
        super(firstName,lastName);
        this._id = id;
        this._grades = [...grades];
        this.stats = () => {
            console.log(`Id : ${this._id}, Full name : ${this._firstName} ${this._lastName}, grade is :  ${this.grades.reduce((a, b) => a + b, 0) / this.grades.length} `)
        }
        this._grades = grades;

    }
    get grades() {
        return this._grades.reduce((a,b) => a+b,0)/this._grades.length;
    }
}
const student = new Student("1","mykhailo","Romanchuk",[5,5,5,5,5,]);
console.log(student);