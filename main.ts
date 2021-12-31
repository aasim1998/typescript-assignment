export{}
let message='Welcome back'
console.log(message);



let x = 10;
const y = 20;

let sum;
const title = 'Codevalution';


let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Aasim';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);


let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,30];


let person1: [string, number] = ['Aasim' , 22]

enum color {Red = 5, Green, Blue};

let c:color = color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Aasim';

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string} {
  return !!obj &&
  typeof obj === "object" &&
  "name" in obj
}

if(hasName(myVariable))
console.log(myVariable.name);

(myVariable as string).toUpperCase();



let a;
a = 10;
a = true;

let b = 20;


let multitype: number | boolean;
multitype = 20;
multitype: true;

let anyType: any;
anyType = 20;
anyType: true;



function add(num1: number, num2: number=10): number {
  if(num2)
    return num1 + num2;
  else
    return num1;  
} 

add(5,10);
add(5);



class Employee{
  employeeName: string;


  constructor(name: string){
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`)
  }
}
let emp1 = new Employee('Aasim');
console.log(emp1.employeeName);
emp1.greet();