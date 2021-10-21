// public > protected > readonly > private
abstract class UserAccount {
    protected name: string;
    protected age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class CharAccount extends UserAccount {
    private nickname: string;
    private level: number; 

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    profile(): void {
        console.log(`NOME: ${this.name} | IDADE: ${this.age}`);
        console.log(`NICKNAME: ${this.nickname} | LEVEL: ${this.level}`);
    }

    get getNickname() {
        return this.nickname;
    }

    set setNickname(nickname: string) {
        this.nickname = nickname;
    }
}

const player1 = new CharAccount("Isadora", 24, "aquasun", 87);
console.log(player1.profile());

// example using get
console.log(player1.getNickname);

// example using set
player1.setNickname = "SemChakraIrmao";

console.log(player1.profile());