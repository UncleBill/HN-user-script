// ==UserScript==
// @name Hacker News Sizer
// @description Give popular news big font size
// @namespace https://github.com/UncleBill/HN-user-script
// @include http://news.ycombinator.com/
// @include https://news.ycombinator.com/
// @homepageURL https://github.com/UncleBill/HN-user-script
// @updateURL https://raw.github.com/UncleBill/HN-user-script/master/HN.user.js
// @author UncleBill
// @version 0.01
// @date 2013-03-24
// @license MIT License
// ==/UserScript==

var nodeSelector = "tr:nth-child(3n+1) td:nth-child(3n+3)";
var titles = document.querySelectorAll( nodeSelector );
var ll = titles.length;


var handleScore = function( num ){
    var news = {
        color :"",           // normal
        fontSize :"10pt"
    }
    if( num > 500 ){
        news.color = "#f00";         // superHit
        news.fontSize = "25pt";
    }
    //else if( num < 40 ){
        //;           // use default
    //}
    else{
        var c = ~~ ( num % 500 / 500 * 256 );
        while( c.length < 2 ){
            c = "0" + c;
        }
        var f = ~~ ( num % 500 / 500 * 25 )+10;
        news.color = "#" + c + "0000";
        console.log( c );
        news.fontSize = f + "pt";
    }

    return news;
}

for( var i = 1;i < ll; ++i ){       // var i = 1; --> ignore the first match
    var _title = titles[i];
    var _scoreNode = _title.parentElement.nextSibling.querySelector('span');
    var _score = parseInt( _scoreNode.textContent, 10 );
    var thisNews = handleScore( _score );
    _title.style.fontSize = thisNews.fontSize;  // fontSize
    _title.querySelector( 'a' ).style.color = thisNews.color;   // color
}
