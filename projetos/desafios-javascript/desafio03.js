// FLUXO DE DECISÃO

const area = prompt('Qual área você deseja seguir: Front-end [Digite 1] ou Back-end [Digite 2]');

if (area == 1) {
    alert('Você escolheu Front-end.')
    
    const escolha1 = prompt('Você gostaria de aprender: React.js [Digite 1] ou Vue.js [Digite 2]')
    if (escolha1 == 1) {
        alert('Você escolheu React.js.')      
    }
    if (escolha1 == 2) {
        alert('Você escolheu Vue.js.')
    }
}

if (area == 2) {
    alert('Você escolheu Back-end.')
    
    const escolha2 = prompt('Você gostaria de aprender: C# [Digite 1] ou Java [Digite 2]')
    if (escolha2 == 1) {
        alert('Você escolheu C#.')      
    }
    if (escolha2 == 2) {
        alert('Você escolheu Java.')
    }
}

const especializar = prompt('E depois você gostaria de: Se especializar na área escolhida [Digite 1] ou Seguir se desenvolvendo para se tornar FullStack [Digite 2]');
if (especializar == 1) {
    alert('Você deseja se especializar em sua área.')      
}
if (especializar == 2) {
    alert('Você deseja se tornar um desenvolvedor FullStack.')
}

let msg = prompt('Existe outra tecnologia que você gostaria de aprender? [Digite 1 para SIM]');
while (msg === 'sim') {
    let novaTecnologia = prompt('Qual');
    alert(`${novaTecnologia} é realmente uma tecnologia muito boa!`)
    msg = prompt('Existe outra tecnologia que você gostaria de aprender?');
}