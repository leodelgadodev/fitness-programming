const numberArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

const numberObj = {
    // key: value
    first: 'uno',
    second: 'dos',
    third: 'tres',
    fourth: 'cuatro',
    fifth: 'cinco',
}

function for_of() {
    for (const n of numberArr) {
        console.log(n)
    }
}

function for_aSecas() {
    for (let i = 0; i <= 30; i = i+5) {
        console.log(i)
    }
}

function for_in() {
    const obj = {}
    for (const key in numberObj) {
        // console.log(key)
        // console.log(numberObj[key])
        obj[`${key}Number`] = numberObj[key]
    }
    console.log(obj)
}

function array_foreach() {
    return numberArr.forEach(n => {
        console.log(n)
    })
}

const main = () => {
    for_in()
}

main();