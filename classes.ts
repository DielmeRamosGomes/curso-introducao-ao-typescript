abstract class UserAccount {
    public name: string
    protected age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }

}

class CharAccount extends UserAccount {
    private nickname: string
    level: number

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age)
        this.nickname = nickname
        this.level = level
    }

    get getLevel() {
        console.log("----- GET-------")
        return this.level
    }

    set setLevel(level: number) {
        this.level = level 
    }

     logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`)
     }

}

/*
const will = new UserAccount("willian", 30)
//console.log(will)
//console.log(will.age)
//will.logDetails()
*/

const john = new CharAccount("John", 45, "johnmaster", 80)
//john.nickname = "willjusten"
//console.log(john)
//john.logDetails()
//john.logCharDetails()
//console.log(john.level)
console.log(john.getLevel)
john.setLevel = 499
console.log(john.getLevel)







