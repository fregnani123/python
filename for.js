
// const data = new Date()
// const getDay = data.getDay();
// const diaDeHoje = diaSemana(getDay)

// function diaSemana(i) {
//     const dia = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];

//     console.log(dia[i])
// }

function sorteiosNomes() {
    let inserirNomes = ['Fabiano', 'Fernanda', 'Adair'];
    const numeroAleatorio = Math.floor(Math.random() * inserirNomes.length);

    console.log(inserirNomes[numeroAleatorio]);
}

sorteiosNomes();
