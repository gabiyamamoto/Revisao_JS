// Declaração das variaveis das vidas dos pokemons.
let pikachuEnergia = 80;
let charmanderEnergia = 80;

// Controle da quantidade de rodadas.
let rodada = 1;

// Enquanto os pokemons estiverem vivos, a luta continua.
while (pikachuEnergia > 0 && charmanderEnergia > 0) {

    // Dar espaço para que a exibição de informações fique mais limpa no console.
    console.log (``);
    
    // Mostrar em qual rodada está.
    console.log (`🔁 RODADA ${rodada}`);

    console.log (``);


    // Gerar golpes com danos aleatórios.
   let ataquePikachu = Math.floor(Math.random() * (25 - 10) + 10);
   let ataqueCharmander = Math.floor(Math.random() * (22 - 8) + 8);
   
   // Aplicar os golpes.
   pikachuEnergia = pikachuEnergia - ataqueCharmander;
   charmanderEnergia = charmanderEnergia - ataquePikachu;

   // Exibir os ataques no console.
   console.log (`⚡ Pikachu usou Choque do Trovão e causou ${ataquePikachu} de dano!`);
   console.log (`🔥 Charmander usou Chama Ardente e causou ${ataqueCharmander} de dano!`);

   console.log (``);

   // Mostrar a vida de cada um dos pokemons.
   console.log (`❤️ Energia do Pikachu: ${pikachuEnergia}`);
   console.log (`🔥 Energia do Charmander: ${charmanderEnergia}`);

   console.log (``);

   console.log (`-------------------------------------------`);

   // Ir para a próxima rodada.
   rodada++;
}

/* Calcular e exibir o resultado da batalha.
    Se a vida do Pikachu for maior que a do Charmander, a vitória é do Pikachu*/
if (pikachuEnergia > charmanderEnergia) {
    console.log (`🏆 Pikachu venceu a batalha com um trovão final!`);
    /* Se a vida do Charmander e a do Pikachu foram menores ou iguais a 0, houve um empate.*/
} else if (pikachuEnergia <= 0 && charmanderEnergia <= 0) {
    console.log (`😮 Empate! Os dois foram para o chão ao mesmo tempo!`);
    /* Se a vida do Charmander for maior, ele ganhou a batalha*/
} else {
    console.log (`👑 Charmander alcançou a vitória com um golpe flamejante!`);
}