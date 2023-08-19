class Employee {
    //properties below YOU set these. 
    id: number; 
    name: string;
    phone: string; 
    email: string; 
    // add a constructor so we can use the class outside of the {}
    constructor(id:number, name: string, phone: string, email:string) {
        this.id = id; 
        this.name = name; 
        this.phone = phone; 
        this.email = email; 
    }
    //returns a string the way we want it in the console 
    toString(): string {
        let output = 
        `Employee Record - ID: ${this.id}\n` +
        `Name: ${this.name}\n` +
        `Contact Information\n` +
        `\tPhone: ${this.phone}\n` +
        `\tEmail: ${this.email}\n`;
        return output
    }
}

let firstEmployee = new Employee(
    1,
    "Arthur Morgan", 
    "8018675309", 
    "fastestFingersInTheWest@gmail.com"
); 
console.log(firstEmployee.toString())