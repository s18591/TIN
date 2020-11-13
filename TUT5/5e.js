class Student {
    constructor(id, firstName, lastName, grades) {
        this.grades = [...grades];

        this.stats = () => {
            console.log(`Id : ${this._id}, Full name : ${this._firstName} ${this._lastName}, grade is :  ${this.grades.reduce((a, b) => a + b, 0) / this.grades.length} `)
        }
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._grades = grades;

    }
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
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

    get grades() {
        return this._grades;
    }

    set grades(value) {
        this._grades = value;
    }
}
const student = new Student("18591","Mykhailo","Romanchuk",[5,5,5,5,5,5,5]);
console.log(student);