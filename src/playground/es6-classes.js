class Person {
    constructor(name='Default name',age = 0){
        console.log('test');
        this.name = name;
        this.age= age;
    }
    getGreeting(){
        return `Hi I am ${this.name} `;
    }
    getDescription(){
        return ` ${this.name} is ${this.age} years old `;
    }
}

class Student extends Person { // create subclass 
    constructor(name,age,major){
        super(name,age);//access parent class
        this.major = major ;
    }
    hasMajor (){
        return !!this.major ;
    }
    getDescription(){
        
        let description = super.getDescription();
        if (this.hasMajor()){
            description += `and studied ${this.major} `;
        }
        return description;
    }

}

class Traveler extends Person { // create subclass 
    constructor (name,age,location){
        super(name,age);
        this.location = location;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if (this.location){
            greeting+= `, I am from ${this.location}`;
        }
        return greeting;
    }
}

const me = new Student('Kai-Ming',25,'Computer Science');
const him = new Traveler('Kai-Ming',25,'Earth');
console.log(me.getGreeting());
console.log(him.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());
