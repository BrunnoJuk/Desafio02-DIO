// Função para calcular o saldo de vitórias e determinar o nível do jogador
function classificarHeroi(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return  {saldoVitorias, nivel};
}
// Variáveis de entrada (você pode alterar para testar)
let vitorias = 25;  // Número de vitórias
let derrotas = 5;  // Número de derrotas

// Chama a função e armazena o resultado
let resultado = classificarHeroi(vitorias, derrotas);

// Exibe a mensagem final
console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} e está no nível ${resultado.nivel}`);
 