const perguntas = [
    {
       pergunta: "Qual é a função usada para imprimir algo no console?",
       respostas: [
        "print()",
        "log()",
        "console()",
       ],
       correta: 1
    },
    {
        pergunta: "Qual declaração é usada para criar uma variável em JavaScript?",
        respostas:[
            "var",
            "v",
            "variável",
        ],
        correta: 0
    },
    {
        pergunta: "Qual dessas opções é um método de string em JavaScript?",
        respostas:[
            "length()",
            "toUpperCase()",
            "push()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual operador é usado para atribuição de valor em JavaScript?",
        respostas:[
            "=",
            "==",
            "+=",
        ],
        correta: 0
    },
    {
        pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
        respostas:[
            "//",
            "/* */",
            "#",
        ],
        correta: 0
    },
    {
        pergunta: "Qual desses é um tipo de dado em JavaScript?",
        respostas:[
            "number",
            "index",
            "count",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas:[
            "pop()",
            "remove()",
            "delete()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
        respostas:[
            "5",
            "32",
            "Erro",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
        respostas:[
            "parseString()",
            "toInt()",
            "parseInt()",
        ],
        correta: 2
    },
    {
        pergunta: "Qual destes é um loop em JavaScript?",
        respostas:[
            "if",
            "for",
            "function",
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas){
    //cria uma constante de quizItem que clona o template
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h2').textContent = item.pergunta
    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name','pergunda-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estacorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estacorreta){
                corretas.add(item)
            }
           
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        
        quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    //coloca  a pergunta na tela
    quiz.appendChild(quizItem)
}