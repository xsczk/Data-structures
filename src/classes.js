class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  //   class method using static keyword
  static findGreaterStudentScore(a, b) {
    return a.calculateAverage() > b.calculateAverage()
      ? a.information()
      : b.information();
  }

  information() {
    return `${this.firstName} ${this.lastName}, grade: ${this.grade}!`;
  }

  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late for ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce((sum, score) => {
      return sum + score;
    }, 0);
    return sum / (this.scores.length || 1);
  }
}

const firstStudent = new Student('John', 'Doe', 12);
firstStudent.email = 'thisisjustaexample@gmail.com.vn';

const secondStudent = new Student('Whatever', 'It is', 2);
console.log(secondStudent.information());
console.log(secondStudent.markLate());
console.log(secondStudent.addScore(92));
console.log(secondStudent.addScore(90));
console.log(secondStudent.addScore(77));
console.log(secondStudent.calculateAverage());
console.log(firstStudent.calculateAverage());
console.log(Student.findGreaterStudentScore(firstStudent, secondStudent));
