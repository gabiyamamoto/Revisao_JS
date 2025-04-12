# ⚔️ BATALHA POKÉMON: PIKACHU 🆚 CHARMANDER

Utilizando o conhecimento de programação em JavaScript adquirido no curso do Senai, realizamos esse script de simulação de combate entre os pokémons Pikachu ⚡e Charmander 🔥.

# 📝 DESCRIÇÃO E REGRAS DO COMBATE

A batalha acontece em rodadas, em que ambos pokémons começam com 80 pontos de energia (vida) e realizam ataques com danos aleatórios.
Em cada rodada, o Pikachu lança um golpe com dano aleatório entre 10 e 25. Já o Charmander contra-ataca com um golpe de dano entre 8 e 22. Os resultados da rodada são exibidos no console.
O combate só acaba quando a energia de um dos dois (ou ambos) chega a 0 ou menos.
Ao fim da batalha, o pokémon vitorioso é exibido no console.

# 💻 CÓDIGO

```javascript
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
   let danoPikachu = Math.floor(Math.random() * (25 - 10) + 10);
   let danoCharmander = Math.floor(Math.random() * (22 - 8) + 8);
   
   // Aplicar os golpes.
   pikachuEnergia = pikachuEnergia - danoCharmander;
   charmanderEnergia = charmanderEnergia - danoPikachu;

   // Criar uma lista de ataques (array) que o pikachu e o Charmander podem fazer.
   let ataquesPikachu = [`Choque do Trovão`, `Relâmpago Ressonante`, `Investida Trovejante`];
   let ataquesCharmander = [`Fluxo do Fogo`, `Chama Incandescente`, `Brasas Ardentes`];

   /* Usar nomeVariavel.length para contar quantos itens tem na array.
   Multiplicar esse length com um número aleatório gerado pelo Math.random.
   Usar Math.floor para arrendondar o número aleatório.*/
   let ataqueEscolhidoPikachu = ataquesPikachu[Math.floor(Math.random() * ataquesPikachu.length)];
   let ataqueEscolhidoCharmander = ataquesCharmander[Math.floor(Math.random() * ataquesCharmander.length)];

   // Exibir os ataques no console.
   console.log (`⚡ Pikachu usou ${ataqueEscolhidoPikachu} e causou ${danoPikachu} de dano!`);
   console.log (`🔥 Charmander usou ${ataqueEscolhidoCharmander} e causou ${danoCharmander} de dano!`);

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
    Se a vida do Pikachu for maior que a do Charmander, a vitória é do Pikachu. */
if (pikachuEnergia > charmanderEnergia) {
    console.log (`🏆 Pikachu venceu a batalha com um trovão final!`);
    // Se a vida do Charmander e a do Pikachu foram menores ou iguais a 0, houve um empate.
} else if (pikachuEnergia <= 0 && charmanderEnergia <= 0) {
    console.log (`😮 Empate! Os dois foram para o chão ao mesmo tempo!`);
    // Se a vida do Charmander for maior, ele ganhou a batalha.
} else {
    console.log (`👑 Charmander alcançou a vitória com um golpe flamejante!`);
}
```

# 👩 AUTOR

Gabriela Emi Yamamoto - 1TDS1
