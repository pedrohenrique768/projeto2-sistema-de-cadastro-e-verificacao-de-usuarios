// CADASTRO
let nome = (prompt("Digite seu nome"))
let idade = parseInt(prompt("Digite sua idade")) 
let senha = parseInt(prompt("Digite sua senha"))

if(idade < 13) {
    alert("Desculpe não foi possivel se cadastrar! (idade minima 13) ")
 } else {
    alert("Cadastro realizado com sucesso!") 
 } 
// LOGIN
let verificarNome = prompt("Digite novamente seu nome:")
let verifcarSenha = parseInt(prompt("Digite novamente sua senha:"))

if (verificarNome == nome && verifcarSenha == senha ) {
    alert(`Login relizado com sucesso! Bem-vido, ${nome} `)
} if (verificarNome === nome && verifcarSenha === senha) {
    alert(`Nome ou senha incorretos. Tente novamente. `)
}

