import {Person} from "./Person"

class Student extends Person {
  constructor(name, height, weight, sno, subject) {
    super(name, height, weight)
    this.sno = sno
    this.subject = subject
  }

  study() {
    console.log(`我的学号是${this.sno}，我正在学习${this.subject}`)
  }
}

export {Student}
