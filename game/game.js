let pikachuEnergia = 80;
let charmanderEnergia = 80;

let rodada = 1;

while (pikachuEnergia > 0 && charmanderEnergia > 0 ) {

    console.log (``);
    
    console.log (`🔁 RODADA ${rodada}`);

    console.log (``);

   let ataquePikachu = Math.floor(Math.random() * (25 - 10) + 10);
   let ataqueCharmander = Math.floor(Math.random() * (22 - 8) + 8);
   
   pikachuEnergia = pikachuEnergia - ataqueCharmander;
   charmanderEnergia = charmanderEnergia - ataquePikachu;

   console.log (`⚡ Pikachu usou Choque do Trovão e causou ${ataquePikachu} de dano!`);
   console.log (`🔥 Charmander usou Chama Ardente e causou ${ataqueCharmander} de dano!`);

   console.log (``);

   console.log (`❤️ Energia do Pikachu: ${pikachuEnergia}`);
   console.log (`🔥 Energia do Charmander: ${charmanderEnergia}`);

   console.log (``);

   console.log (`-------------------------------------------`);

   rodada++;
}

if (pikachuEnergia > charmanderEnergia) {
    console.log (`🏆 Pikachu venceu a batalha com um trovão final!`);
} else if (pikachuEnergia = charmanderEnergia) {
    console.log (`😮 Empate! Os dois foram para o chão ao mesmo tempo!`);
} else {
    console.log (`👑 A vitória é do Charmander!`);
}