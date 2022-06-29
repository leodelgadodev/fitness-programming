

const poteCuarto = 2.9
const confites = 2.9
const helardo = 1.8
const heladovich = 1.7
const heladix = 1.6
const crema = 1
const agua = 0.6

// recibe un numero saldo y me devuelve el saldo del  
// helado mas caro que puedo comprar por ese saldo
function decimeElHeladoMasCaroQuePuedoComprarCon(unSaldo) {
    const helados = [agua, heladovich, poteCuarto, confites, heladix, crema, helardo, confites]
    const heladosQuePuedoComprar = []

    for (const helado of helados) {
        if (helado <= unSaldo) {
            heladosQuePuedoComprar.push(helado)
        }
    }

    const heladosEnOrden = heladosQuePuedoComprar.sort()
    return heladosEnOrden[heladosEnOrden.length - 1]
}

decimeElHeladoMasCaroQuePuedoComprarCon(1.8)