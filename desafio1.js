

function media() {
  let acumula = 0
  let quantidade = prompt("Digite", "")
  for (let i=0; i < quantidade; i++) {
    let numero = Number(prompt("digite", ""))
    acumula += numero
  }  
  console.log(acumula/quantidade)
}
media()






