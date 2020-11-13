function Student(id, firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = [...grades];

    this.stats = () => {
        console.log(`Id : ${this.id}, Full name : ${this.firstName} ${this.lastName}, grade is :  ${this.grades.reduce((a, b) => a + b, 0) / this.grades.length} `)
    }
}

const student = new Student('18591', 'Mykhailo', 'Romanchuk', [3,5,4,2,3,4,5,5])

student.stats();