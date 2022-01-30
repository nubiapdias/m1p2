const prompt = require("prompt-sync")();

const arr1 = ["pedra", "papel", "tesoura"];

let vitoriah;
let vitoriac;
let derrotah;
let derrotac;
let empate;
let resposta = "sim";

while (resposta == "sim" || resposta == "s") {
    vitoriah = 0;
    vitoriac = 0;
    derrotac = 0;
    derrotah = 0;
    empate = 0;
    let rodadas = +prompt("Quantas vezes você quer jogar? ");
    console.log()

    for (let i = 0; i < rodadas; i++) {
        let item1 = arr1[Math.floor(Math.random() * arr1.length)];

        let item2 = prompt("pedra, papel ou tesoura? ").toLowerCase();

        while (item2 != "pedra" && item2 != "tesoura" && item2 != "papel") {
            console.log("não é válido");
            item2 = prompt("pedra, papel ou tesoura? ").toLowerCase();
        }

        console.log("computador escolheu " + item1);
        console.log()

        if (
            (item1 == "pedra" && item2 == "tesoura") ||
            (item1 == "papel" && item2 == "pedra") ||
            (item1 == "tesoura" && item2 == "papel")
        ) {
            console.log("o Computador ganhou do humano burro.");
            vitoriac++;
            derrotah++;
            console.log()
        } else if (
            (item2 == "pedra" && item1 == "tesoura") ||
            (item2 == "papel" && item1 == "pedra") ||
            (item2 == "tesoura" && item1 == "papel")
        ) {
            console.log("o Humano ganhou. :/");
            vitoriah++;
            derrotac++;
            console.log()
        } 
        
        console.log()

        if (item1 == item2 || item2 == item1) {
            console.log("empatou!");
            empate++;
        }
    }

    prompt("aperte enter para ver o score");
    console.clear();

    console.log(
        "Você fez: " +
            vitoriah +
            " pontos. " +
            " e o computador fez: " +
            vitoriac +
            " pontos." +
            " Foram " +
            empate +
            " empates!"
    );
    console.log();

    if (vitoriah > vitoriac) {
        console.log("Você venceu o computador!");
    } else if (vitoriac > vitoriah) {
        console.log("O computador venceu!");
    } else {
        console.log("empate");
    }

    resposta = prompt("Você quer jogar de novo? ");
}
