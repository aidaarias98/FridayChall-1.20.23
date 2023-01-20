//Create a class for a person that has properties for the person's name, age, and address.
var Person = /** @class */ (function () {
    function Person(fullName, age, address) {
        this.fullName = fullName;
        this.age = age;
        this.address = address;
    }
    //methods
    //The class should have a method that takes
    // a string as an argument and returns the person's name and address concatenated together.
    Person.prototype.getInfo = function () {
        try {
            return "".concat(this.fullName, " ").concat(this.address);
        }
        catch (error) {
            return "there is an error!";
        }
    };
    return Person;
}());
//creating an object for the car
var woman = new Person('aida arias', 24, '3807 Willy Ave');
console.log(woman.getInfo()); //expected output: aida arias 3807 Willy Ave
