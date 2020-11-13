function Student(id, firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = [...grades];

    this.stats = () => {
        console.log(`Id : ${this.id}, Full name : ${this.firstName} ${this.lastName}, grade is :  ${this.grades.reduce((a, b) => a + b, 0) / this.grades.length} `)
    }

    Object.defineProperty(this, 'avg', {
        get() {
            return this.grades.reduce((a, b) => a + b, 0) / this.grades.length
        }
    })
    Object.defineProperty(this, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        set(value) {
            const [firstName, lastName] = value.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
        }
    })
}
const student = new Student("s18591","Mykhailo","Romanchuk",[5,5,5,5,5,5,5,5,5],"Eng");
student.fullName = 'Martin Limbo';
console.log("avarage : " + student.avg);
console.log(student);
