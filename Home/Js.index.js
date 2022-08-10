console.log("Bem vindo à página de exercício");
console.log("Nesta página exercitaremos todo o conteúdo de JavaScript visto");

console.log("Primeiramente quero me apresentar:");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

var meunome = "Bruno";
let sobrenome = "Pereira";
let minhaidade = 23;
let minhacidade = "Urubici";
let meuestado = "Santa Catarina";
let booleans = true;

console.log("Eu me chamo " + meunome + " " + sobrenome);
console.log("Sou natural de " + minhacidade);
console.log("Para quem não conhece, " + minhacidade + " se localiza em " + meuestado);
console.log("Ah, idade não se fala, mas eu tenho " + minhaidade);

console.log("Agora quero saber mais de você:");
prompt("Posso fazer algumas perguntas ?");

let interesse = true

// switch (interesse) {
//     case "Sim", "sim":
//         console.log("Legal, irei começar");
//         break;


//     default:
//          console.log("Ah, que pena, não saberemos mais sobre você");
//          alert("Você não precisa responder as perguntas se não quiser")
//          break;


// }



let nome = prompt("Qual o seu primeiro nome ?")

switch (nome) {
    case "Bruno":
        console.log("Que legal, temos o mesmo nome. Seja bem vindo:");
        break;

    default:
        console.log("Legal, seja bem vindo " + nome);
        break;
}

let idade = prompt("Qual sua idade?");
if (idade < 18) {
    console.log("Você é menor de idade");
} else {
    (idade >= 18);
    console.log("Você é maior de idade");
}

if (idade > 23) {
    console.log("Você é mais velho que eu");
} else if (idade < 23) {
    console.log("Você é mais novo que eu");
} else (idade == minhaidade);{
    console.log("Temos a mesma idade");
}


let cidade = prompt("Qual sua cidade?");
switch(cidade){
    case "Urubici":
        console.log("Legal, somos quase vizinhos");
        break;
    default:
        console.log("Quero conhecer um dia.");
}

let estado = prompt("Equal o estado de " + cidade + " ?");

console.log("Vamos observar");

lista();

var arrays = [1,2,3,4,nome,idade,cidade,estado]
var objeto = [
    nome = "Oliota",
    idade = 18,
    cidade = "Blumenau",
    estado= "Santa Catarina"
]


function lista(variaveis) {
    let nome = "Rubem";
    let idade = 35;
    let booleans = true;
    var arrays = [1, 2, 3, 4, nome, idade, cidade, estado]
    var objeto = [ 
        nome = "Oliota",
        idade = 18,
        cidade = "Blumenau",
        estado = "Santa Catarina"
    ]

}

 console.log("E as variáveis dentro da lista são:",
 nome, typeof(nome),
 idade, typeof(idade),
 booleans, typeof(booleans),
 arrays, typeof(arrays),
 objeto, typeof(objeto),
 );

console.log("A lista é uma ", typeof(lista));

console.log("As minhas variáveis são:",
meunome, typeof(meunome),
minhaidade, typeof(minhaidade),
minhacidade, typeof(minhacidade),
meuestado, typeof(meuestado)
);









