// object
const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-23 10:00"),
    finalizada: false
}

const atividades = [
    atividade, 
    {
        nome: "Academia",
        data: new Date("2024-07-27 12:00"),
        finalizada: false
    },
    {
        nome: "Jogar",
        data: new Date("2024-07-29 13:00"),
        finalizada: false
    }
]

// arrow function
const criarItemDeAtividade = (atividade) => {

    let input = '<input type="checkbox"'

    if (atividade.finalizada == true) {
        input = input + 'checked'
    }

    input = input + '>'

    return `<div>
            ${input}
            <span>${atividade.nome}</span>
            <time>${atividade.data}</time>
            </div>`
}

const section = document.querySelector('section')

for(let atividade of atividades) {
    section.innerHTML = section.innerHTML + criarItemDeAtividade(atividade)
}
