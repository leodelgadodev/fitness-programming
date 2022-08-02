const iviPeroJSON = require('./ivi-pero-json.json');

const facu = {
    name: 'Facultad de Ciencias',
    code: 'FC',
    students: [
        {
            name: 'Juan',
            code: '12345',
            age: 20,
            grade: 10
        },
        {
            name: 'Pedro',
            code: '12346',
            age: 21,
            grade: 9
        },
    ]
}

const facuPeroJSON = JSON.stringify(facu);

console.log(JSON.stringify(iviPeroJSON))

