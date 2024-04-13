var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Bom tarde!')
} else {
    console.log('Boa noite')
} 

// CORRIGIR A HORA DA NOITE, CONTINUA ERRADO FRI 12 APR 2024