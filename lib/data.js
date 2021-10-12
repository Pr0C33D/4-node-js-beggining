// Failu sistemos CRUD
// C - create (sukurti)
// R - read (perskaityti)
// U - update (atnaujinti)
// D - delete (istrinti)

/**
 * Darbiniu funkciju su failu sistema objektas.
 */
const data = {};

/**
 * JSON failo kurimas .data folder'yje.
 * @param {string} dir Sub-Folder'is esantis .data folder'yje.
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio.
 * @param {Object} content Javascript objektas, pvz.: `{name: "Marsietis"}`.
 * @returns {boolean} Pozymis, ar funkcija sekmingai sukure nurodyta faila. 
 */
data.create = (dir, fileName, content) => {
    console.log('kuriamas failas');
    return true;
}
/**
 * JSON failo turinio nuskaitymas .data folder'yje.
 * @param {string} dir Sub-Folder'is esantis .data folder'yje.
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio.
 * @returns {Object} isparsintas failo turinys. 
 */
data.read = (dir, fileName) => {
    console.log('skaitomas failas');
}
/**
 * JSON failo turinio atnaujinimas .data folder'yje.
 * @param {string} dir Sub-Folder'is esantis .data folder'yje.
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio.
 * @param {Object} content Javascript objektas, pvz.: `{name: "Marsietis"}`.
 * @returns {boolean} Pozymis, ar funkcija sekmingai atnaujintas nurodytas failas. 
 */
data.update = (dir, fileName, content) => {
    console.log('atnaujinamas failas');
    return true;
}
/**
 * JSON failo trynimas .data folder'yje.
 * @param {string} dir Sub-Folder'is esantis .data folder'yje.
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio.
 * @returns {boolean} Pozymis ar sekimgai istrintas nurodytas failas. 
 */
data.delete = (dir, fileName) => {
    console.log('trinamas failas');
}

module.exports = data;


