/* 
    Representation - UML
    |-------------Class YourClass-------------|
    > Attributes
        - name: string
        + surname: string
        # age: number

    > Operations
        + getName(): string
        + getAge(): number
        + setName(name: string)
        + setAge(age: number)
*/
export class YourClass {
  constructor(
    private name: string,
    public surname: string,
    protected age: number
  ) {}

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setAge(age: number): void {
    this.age = age;
  }
}

/* --------------------------------------------------
    Representation - HERANÇA
    |-------------Class Person-------------|
    > Attributes
    > Operations


    |-------------Class Programmer-------------|
    > Attributes
    > Operations
*/
export class Person {}

export class Programmer extends Person {}

/* --------------------------------------------------
    Representation - COMPOSITION AND AGGREGATION
    |-------------Class Car-------------|
    > Attributes
        - engine: Engine
    > Operations


    |-------------Class Engine-------------|
    > Attributes
    > Operations
*/
export class Car {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }
}

export class Engine {}

const engine = new Engine();
const car = new Car(engine);

/* --------------------------------------------------
    Representation - DEPENDENCY
    |-------------Class Printer-------------|
    > Attributes
    > Operations
        + print()

    |-------------Class Document-------------|
    > Attributes
    > Operations
*/
export class Printer {
  public print(document: Document): void {
    console.log(`Printing ${document}`);
  }
}

export class Document {}

/* --------------------------------------------------
    Representation - REALIZATION
    |-------------Interface RemoteControl-------------|
    > Attributes
    > Operations
        + play()
        + pause()

    |-------------Class Bluray-------------|
    > Attributes
    > Operations
        + play()
        + pause()

    |-------------Interface SoundControl-------------|
    > Attributes
    > Operations
        + play()
        + pause()

    |-------------Class Sound-------------|
    > Attributes
    > Operations
        + play()
        + pause()
*/
export interface RemoteControl {
  play(): void;
  pause(): void;
}

export interface SoundControl extends RemoteControl {
  changeRadio(): void;
}

export class Bluray implements RemoteControl {
  play(): void {}
  pause(): void {}
}

export class Sound implements SoundControl {
  changeRadio(): void {}
  play(): void {}
  pause(): void {}
}

/* --------------------------------------------------
    Representation - DEPENDENCY
    |-------------Class Animal-------------|
    > Attributes
    > Operations
        # makeNoise(): string
        + makeSound()

    |-------------Class Dog-------------|
    > Attributes
    > Operations
        # makeNoise(): string
*/
export abstract class Animal {
  protected abstract makeNoise(): string;

  makeSound(): void {
    console.log(this.makeNoise());
  }
}

export class Dog extends Animal {
  protected makeNoise(): string {
    return 'au au';
  }
}

const dog = new Dog();
dog.makeSound();
