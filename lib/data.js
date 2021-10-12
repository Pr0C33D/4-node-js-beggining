// Failu sistemos CRUD
// C - create (sukurti)
// R - read (perskaityti)
// U - update (atnaujinti)
// D - delete (istrinti)
const fs = require('fs');
const path = require('path')

/**
 * Darbiniu funkciju su failu sistema objektas.
 */
const data = {};
data.baseDir = path.join(__dirname, '../.data/');

/**
 * Absoliutaus kelio konstravimas iki nurodyto fialo esancio .data folderyje
 * @param {string} dir Sub-Folder'is esantis .data folder'yje.
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio
*  @returns {Object} absoliutus kelias iki failo
*/
function fullPath(dir, file) {
    return `${data.baseDir}${dir}\\${file}.json`
}

/**
 * JSON failo kurimas .data folder'yje.
 * @param {string} dir Sub-Folder'is esantis .data folder'yje.
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio.
 * @param {Object} content Javascript objektas, pvz.: `{name: "Marsietis"}`.
 * @returns {boolean} Pozymis, ar funkcija sekmingai sukure nurodyta faila. 
 */
data.create = (dir, fileName, content, callback) => {
    console.log('Kuriamas failas...');
    const absPath = fullPath(dir, fileName);

    fs.open(fullPath(dir, fileName), 'wx', (err, fileDescriptor) => {
        if (err || !fileDescriptor) {
            return callback(false, `Iviko klaida bandant sukurti faila ir gauti prieiga prie jo :(`)
        }

        const stringContent = JSON.stringify(content);

        fs.writeFile(fileDescriptor, stringContent, (err,) => {
            if (err) {
                return callback(false, 'Iviko klaida bandant irasyti turini i faila.');
            }
            return callback(true, 'Failas sekmingai sukurtas ir turinys irasytas');
        });

        fs.close(fileDescriptor, (err) => {
            if (err) {
                return callback(false, 'Nepavyko uzdaryti/atlaisvinti failo :(');
            }
        })
        return callback(true, 'Failas sekmingai sukurtas :)');
    });
};
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


