let pikachuEnergia = 80;
let charmanderEnergia = 80;

let rodada = 1;

while (pikachuEnergia > 0 && charmanderEnergia > 0) {

    console.log (``);
    
    console.log (`🔁 RODADA ${rodada}`);

    console.log (``);


   let danoPikachu = Math.floor(Math.random() * (25 - 10) + 10);
   let danoCharmander = Math.floor(Math.random() * (22 - 8) + 8);
   
   pikachuEnergia = pikachuEnergia - danoCharmander;
   charmanderEnergia = charmanderEnergia - danoPikachu;

   let ataquesPikachu = [`Choque do Trovão`, `Relâmpago Ressonante`, `Investida Trovejante`];
   let ataquesCharmander = [`Fluxo do Fogo`, `Chama Incandescente`, `Brasas Ardentes`];

   let ataqueEscolhidoPikachu = ataquesPikachu[Math.floor(Math.random() * ataquesPikachu.length)];
   let ataqueEscolhidoCharmander = ataquesCharmander[Math.floor(Math.random() * ataquesCharmander.length)];

   console.log (`⚡ Pikachu usou ${ataqueEscolhidoPikachu} e causou ${danoPikachu} de dano!`);
   console.log (`🔥 Charmander usou ${ataqueEscolhidoCharmander} e causou ${danoCharmander} de dano!`);

   console.log (``);

   console.log (`❤️ Energia do Pikachu: ${pikachuEnergia}`);
   console.log (`🔥 Energia do Charmander: ${charmanderEnergia}`);

   console.log (``);

   console.log (`-------------------------------------------`);

   rodada++;
}

if (pikachuEnergia > charmanderEnergia) {
    console.log (`🏆 Pikachu venceu a batalha com um trovão final!`);
} else if (pikachuEnergia <= 0 && charmanderEnergia <= 0) {
    console.log (`😮 Empate! Os dois foram para o chão ao mesmo tempo!`);
} else {
    console.log (`👑 Charmander alcançou a vitória com um golpe flamejante!`);
}