var nodeSelector = "tr:nth-child(3n+1) td:nth-child(3n+3)";
var titles = document.querySelectorAll( nodeSelector );
var ll = titles.length;


var handleScore = function( num ){
    var news = {
        color :"",           // normal
        fontSize :"10pt"
    }
    if( num > 1000 ){
        news.color = "#f00";         // superHit
        news.fontSize = "25pt";
    }
    else if( num > 500 ){
        news.color = "#f66";         // hugeNews
        news.fontSize = "20pt";
    }
    else if( num > 200 ){
        news.color = "#f99";         // bigNews
        news.fontSize = "15pt";
    }
    else{
        //news = news;
        ;
    }

    return news;
}

for( var i = 1;i < ll; ++i ){       // var i = 1; --> ignore the first match
    var _title = titles[i];
    var _scoreNode = _title.parentElement.nextSibling.querySelector('span');
    var _score = parseInt( _scoreNode.textContent, 10 );
    var thisNews = handleScore( _score );
    _title.style.fontSize = thisNews.fontSize;  // fontSize
    _title.style.color = thisNews.color;      // color
}
