
    "use strict";

    var beatles={
        name : 'Beatles',
        members : [ 'McCartney', 'Lennon', 'Harrison', 'Starr' ],
        albums: [
            { name : 'Please Please Me', year : 1963 },
            { name : 'With The Beatles', year : 1963 },
            { name : "A Hard Day's Night", year : 1964 }
        ]
    };

    var beatles2=JSON.parse(JSON.stringify(beatles));

    beatles2.name="The Beatles";
    beatles2.members[1]='John Lennon';

    console.log( beatles );
    console.log( beatles2 );