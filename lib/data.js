// Failu sistemos CRUD
// C - create (sukurti)
// R - read (perskaityti)
// U - update (atnaujinti)
// D - delete (istrinti)

const data = {};

data.create = (dir, fileName) => {
    console.log('kuriamas failas');
}

data.read = (dir, fileName) => {
    console.log('skaitomas failas');
}

data.update = (dir, fileName) => {
    console.log('atnaujinamas failas');
}

data.delete = (dir, fileName) => {
    console.log('trinamas failas');
}

module.exports = data;


