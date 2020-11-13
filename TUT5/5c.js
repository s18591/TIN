function Student(id, firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = [...grades];

    this.stats = () => {
        console.log(`Id : ${this.id}, Full name : ${this.firstName} ${this.lastName}, grade is :  ${this.grades.reduce((a, b) => a + b, 0) / this.grades.length} `)
    }
}
Student.prototype.course = [];

const createStudent = (id, name, surname, grades, course) => {
    const student = new Student('1', 'Mykhailo', "Romanchuk", [3, 3, 3, 3]);
    student.course = course;
    return student;
}

const student = createStudent('s18591', 'Mykhailo', 'Romanchuk', [4, 4, 4, 4, 4, 4], ['Eng', 'Rus'])
console.log(student);