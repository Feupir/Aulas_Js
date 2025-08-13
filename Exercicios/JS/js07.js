var qnt, preco
qnt = parseInt(prompt("Digite a quantidade de parcelas: "))
preco = parseFloat(prompt("Digite o valor da compra: "))
alert("O valor de cada parcela é: R$ " + (preco / qnt))