const axios = require('axios')

async function getGatitos() {
    const res = await axios.get('https://cataas.com/cat')
    return res.data
}

const mainConPromise = () => {
    getGatitos().then((gatito) => {
        console.log(gatito)
        console.log('El binario del gatito')
    })
}

const mainConAsync = async() => {
    const gatito = await getGatitos()
    console.log(gatito)
    console.log('El binario del gatito')
};

const main = async() => {
    await mainConAsync(); // Promise<void>
    mainConPromise(); // void, no tiene sentido hacerle un await
}

main();