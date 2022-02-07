var beatles= {
    name : 'Beatles',
    members : [ 'McCartney', 'Lennon', 'Harrison' ],
    albums: [
        { name : 'Please Please Me', year : 1963 },
        { name : 'With The Beatles', year : 1963 },
        { name : "A Hard Day's Night", year : 1954 },
        { name : "Beatles For Sale", year : 1964 },
        { name : "Help", year : 1965 },
    ]
};

let beatles2=beatles;

// изменим имя группы
beatles={...beatles,name:"The Beatles"};
// т.е. НОВЫЙ хэш, содержащий все старые элементы,
// только для ключа name - другое значение

// добавим члена группы
beatles={...beatles,
    members:[...beatles.members,'Starr']
};
// т.е. НОВЫЙ хэш, содержащий все старые элементы,
// только для ключа members - новое значение,
// и это НОВЫЙ массив, содержащий все старые элементы
// плюс один новый

// изменим год третьего альбома
beatles={...beatles, // НОВЫЙ хэш, содержащий все старые элементы,
    albums:[ // только для ключа albums - новое значение, и это НОВЫЙ массив,
        ...beatles.albums.slice(0,2), // содержащий первые два элемента старого массива,
        {...beatles.albums[2],year:1964}, // новый хэш (построенный из третьего элемента массива с заменой ключа year),
        ...beatles.albums.slice(3,5), // и последние два элемента старого массива
    ]
};

// в хэш beatles внесено много изменений
console.log(beatles);
// а хэш beatles2 не изменился, т.к. мы вносили иммутабельные изменения
console.log(beatles2);