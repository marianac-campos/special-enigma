"use strict";
var createChamp = /** @class */ (function () {
    function createChamp(n, r, f, d) {
        this.name = n;
        this.region = r;
        this.function = f;
        this.description = d;
    }
    return createChamp;
}());
var newChamp = {
    name: "Tahm Kench",
    region: "Runeterra",
    function: "Suporte",
    description: "O mundo é um só rio e eu sou seu rei.",
    habilidade: function (name) {
        console.log("A passiva de " + name + " se chama \"Um gosto adquirido\"");
    }
};
console.log(newChamp);
