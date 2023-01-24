// ESERCIZIO 1 //

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mostOld() {
    if (P1.age > P2.age && P1.age > P3.age) {
      return P1.name + " è più grande di " + P2.name + " e " + P3.name;
    } else if (P2.age > P1.age && P2.age > P3.age) {
      return P2.name + " è più grande di " + P1.name + " e " + P3.name;
    } else if (P3.age > P1.age && P3.age > P2.age)
      return P3.name + " è più grande di " + P2.name + " e " + P1.name;
  }
}

let P1 = new Person("Dusan", "50");
let P2 = new Person("Angel", "60");
let P3 = new Person("Paul", "96");
console.log(P1.mostOld());
