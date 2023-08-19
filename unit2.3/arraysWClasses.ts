import { variableDeclaration } from "@babel/types";

class Bird {
    name: string; 
    canFly: boolean; 
    hasFeathers: boolean = true; 

    constructor(name: string, canFly: boolean){
        this.name = name; 
        this.canFly = canFly;
    }

    flapWings() {
        if (this.canFly)
        console.log(`${this.name} can in fact fly!`)
        else
        console.log(`${this.name} cannot fly and you probably shouldnt rub it in.`);
    }
}

let birds: Array<Bird> = [
    new Bird("Toucan", true),
    new Bird("Penguin", false),
    new Bird("Pigeon", true), 
    new Bird("Emu", false)
]

birds.forEach((item: Bird) => {
    item.flapWings()
})
