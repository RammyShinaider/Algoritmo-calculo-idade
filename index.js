let anoNascimento 
let anoAtual
let anosIdade
let idadeMeses
let idadeDias 
let idadeSemanas

anoNascimento = prompt("Informe seu ano de nascimento:")
anoAtual = prompt("Informe o ano atual:")
anosIdade = anoAtual - anoNascimento
idadeMeses = anosIdade * 12
idadeDias =  anosIdade * 365
idadeSemanas = idadeMeses * 4


alert("A idade em anos: " + anosIdade + " anos")

alert("A idade em meses: " + idadeMeses + " meses")

alert("A idade em semanas: " + idadeSemanas + " semanas")

alert("A idade em dias: " + idadeDias + " dias")

