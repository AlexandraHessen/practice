

    "use strict";

    var text='истоки рок-музыки лежат в блюзе из которого и вышли первые рок-жанры рок-н-ролл и рокабилли первые поджанры рок-музыки возникали в тесной связи с народной и эстрадной музыкой того времени в первую очередь это фолк кантри скиффл мюзик-холл за время своего существования были попытки соединить рок-музыку практически со всеми возможными видами музыки с академической музыкой арт-рок появляется в конце 60-х и более поздний симфо-метал джазом джаз-рок появляется в конце 60-х начале 70-х латинской музыкой латино-рок появляется в конце 60-х индийской музыкой рага-рок появляется в середине 60-х в 60-70-х годах появились практически все крупнейшие поджанры рок-музыки наиболее важными из которых помимо перечисленных являются хард-рок панк-рок рок-авангард в конце 70-х-начале 80-х появились такие жанры рок-музыки как пост-панк новая волна альтернативный рок хотя уже в конце 60-х годов появляются ранние представители этого направления хардкор крупный поджанр панк-рока а позже и брутальные поджанры метала дэт-метал блэк-метал в 90-х годах получили широкое развитие жанры гранж появился в середине 80-х брит-поп появляется в середине 60-х альтернативный метал появляется в конце 80-х';

    var words=text.split(' ');

    var wordsCount={}; // ключ - слово, значение - сколько раз оно встретилось
    for ( var i=0; i<words.length; i++ ) {
        var word=words[i];
        if ( !(word in wordsCount) )
            wordsCount[word]=0;
        wordsCount[word]++;
    }

    for ( word in wordsCount )
        console.log( 'слово ' + word + ' количество ' + wordsCount[word] );