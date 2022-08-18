

function calc() {
  const numeroA = Number(prompt("Digite o primeiro número"))
  const numeroB = Number(prompt("Digite o segundo número"))
  const operador = prompt("Digite o segundo número")
  let total = 0
  if (operador==="+") {
    total = numeroA + numeroB
  } else if (operador==="-") {
    total = numeroA - numeroB
  } else if (operador==="*") {
    total = numeroA * numeroB
  } else if (operador==="/") {
    total = numeroA / numeroB
  }

  console.log(total)
      
}
calc()






