function parImpar (){
  const numero = prompt("digite um número", "")
  if (numero%2 === 0) {
    console.log(numero + " par")
  } else {
    console.log(numero + " ímpar")
  }

}

parImpar()