const data = require('./lib/data.js');

data.create('users', 'petras', { name: 'Petras', age: 99 });
data.read('users', 'petras');
data.update();
data.delete();

data.create('books', 'du-gaideliai', { text: 'tekstas' });
