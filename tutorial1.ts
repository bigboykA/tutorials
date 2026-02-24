//type anotations in typescript

let id:number = 5; //typescript adds defintion instead of javascript assuming types.
let company :string = "Notion"; // string

let isIPO: boolean = true; // boolean 


let ids:number[] = [1,2,3,4];
let x: any="period"; // could be any type

let yArray: any[] = ["kofi",0,true];  // any array type


const concatenateValues = (a:string,b:string):string=>{
    return a + b;
}

console.log(concatenateValues("Hello","World"));
console.log(concatenateValues("10","10"));



//Tutorial 2

// an interface is a blueprint for how an object should look like. 

interface UserInterface{
    id: number,
    name:string,
    age?: number //optinality
    greet(message: string):void // initializing functions in typescript interface
}

const User:UserInterface = {
    id: 2,
    name: "Kofi",
    // age: 22
    greet(message: string): void{
        console.log(message);
    }
}
if(!User.age){
    console.log("No age of the user defined");
}
else{
    console.log(User.age);
}

User.greet("Hello");

// union : combining multiple types
/**type alias */

type IDFieldType = string | number;
const printID=(id:IDFieldType)=>{
    console.log("Id "+ id)
}

printID("0564e3");