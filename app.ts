//Create a class for a person that has properties for the person's name, age, and address.
class Person{
    fullName:string;
    age:number;
    address:string;

    constructor(fullName:string, age:number,address:string){
        this.fullName=fullName;
        this.age= age;
        this.address=address;
    }

    //methods
    //The class should have a method that takes
    // a string as an argument and returns the person's name and address concatenated together.
    getInfo(): string{
        try{
            return `${this.fullName} ${this.address}`;
        }catch (error){
            return `there is an error!`;
        }
    }
}

//creating an object for the car
let woman = new Person('aida arias',24, '3807 Willy Ave')

console.log(woman.getInfo());//expected output: aida arias 3807 Willy Ave