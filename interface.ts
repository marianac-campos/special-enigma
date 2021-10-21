interface Champ {
    name: string;
    region: string;
    function: string;
    description: string,

    habilidade?: (name: string) => void;
}

class createChamp implements Champ {
    name: string;
    region: string;
    function: string;
    description: string;
    
    constructor(n: string, r: string, f: string, d: string) {
        this.name = n;
        this.region = r;
        this.function = f;
        this.description = d;
    }
}

const newChamp: Champ = {
    name: "Tahm Kench",
    region: "Runeterra",
    function: "Suporte",
    description: "O mundo é um só rio e eu sou seu rei.",
    habilidade: function (name: string): void {
        console.log(`A passiva de ${name} se chama "Um gosto adquirido"`);
    }
}

console.log(newChamp);