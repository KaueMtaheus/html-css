const texto =  `Olá, meu nome é Afrold, eu sou um menino muito inteligente. Hoje eu criei o meu proprio site estou muito feliz com esse meu novo site, e por isso estou compartilhando esse momento com vocês.`;
const resumo = document.getElementById("meutexto"); 
 // Obtém o elemento onde o texto será exibido
let res = 0;
// Variável para rastrear a posição atual no texto


function digitartexto() {
    if (res < texto.length) {  
        resumo.innerHTML += texto.charAt(res);
        res++;
        setTimeout(digitartexto, 50);
    }

}

digitartexto();