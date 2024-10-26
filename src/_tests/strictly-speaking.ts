export class Person {
  age: number;
  name: string;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export class Character extends Person {
  role: 'human' | 'robot';
  level: number;
  createdAt: Date;

  constructor(name: string, age: number, role: 'human' | 'robot', level = 1) {
    super(name, age);

    this.role = role;
    this.level = level;
    this.createdAt = new Date();
  }

  levelUp() {
    this.level++;
  }
}
