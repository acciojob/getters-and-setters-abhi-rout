class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying.`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching.`);
  }
}

// Example usage:
const person = new Person("John", 25);
console.log(person.name);  // Output: John
console.log(person.age);  // Output: 25

const student = new Student("Alice", 20);
student.study();  // Output: Alice is studying.

const teacher = new Teacher("Mr. Smith", 35);
teacher.teach();  // Output: Mr. Smith is teaching.