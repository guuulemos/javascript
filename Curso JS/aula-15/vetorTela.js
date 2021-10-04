let num = [8, 1, 7, 4, 2, 9]

console.log(`Posições e valores do nosso vetor:`)
for(var i = 0; i < num.length; i++) {
    console.log(`${i + 1}° posição tem o valor ${num.sort()[i]}`)
}

/*for(let pos in num) {
    console.log(pos)
}*/