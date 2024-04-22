let num: number =5;
num=3

let car="toyota";

let isLoading = false;

let house :{
    name: string,
    color ?: string

}={
    name: "",
    color: "",
}
house.name = "dd"

let products: any[]=[]
products.push(2)

let names=["toy", "toyota", "toyota"]

//object array
let people:{
    name: string,
    age:number,
}[]=[]
people.push({
    name: "toyota",
    age:20
})
console.log(people);

const sum=(number1: number, number2: number)=>{
    return number1 + number2;
}
sum(1,4)

let size
class Person{
    name: string 
    age:number
    constructor(name:string,age:number){
        this.name =name
        this.age =age
    }

}