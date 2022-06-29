function rangos(num) {
    if (num < 10) {
        return 'numero menor a 10'
    } else if (num >= 10 && num <= 20) {
        return 'numero entre 10 y 20'
    } else if (num > 20) {
        return 'numero mayor a 20'
    } else {
        return 'no se que paso aca xd'
    }
}

function rangosConSwitch(num) {
    switch (true) {
        case num < 10: return 'numero menor a 10';
        case num >= 10 && num <= 20: return 'numero entre 10 y 20';
        case num > 20: return 'numero mayor a 20';
        default: 'no se que paso aca xd'
    }
}

const main = () => {
 console.log(rangos(9))
 console.log(rangosConSwitch(9))
 console.log(rangos(18))
 console.log(rangosConSwitch(18))
 console.log(rangos(27))
 console.log(rangosConSwitch(27))
}

main();