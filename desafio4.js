function triangulo() {
  const numero = Number(prompt("digite um número"));
  let triangulo = [];
  for (var i = 1; i <= numero; i++) {
    triangulo.push("*")
    linha = String(triangulo);
    const semvirgula = linha.replace(/,/g, "");
    console.log(semvirgula)        
  }
}
triangulo()

