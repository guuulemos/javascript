// var agora = new Date()
var hora = 22
console.log(`Agora são exatamente ${hora} horas.`)

if(hora < 12 && hora >= 6) {
    console.log(`Bom dia!`)
} else if(hora <= 18 && hora >= 13) {
    console.log('Boa tarde!')
} else if(hora >= 0 && hora <= 5) {
    console.log('Boa madrugada!')
} else {
    console.log('Boa noite!')
}