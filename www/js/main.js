define(['app/storage','adapters/words'], function (storage,wordsAdapter) {
    if(!storage.normalize()) return alert("localStorage is'n suported in your fucking browser :)))))))");
    wordsAdapter.getTodays().done(function(words){
        window.todo = words;
        console.log(todo);
        html = "";
        for(var i=0 ; i < words.length; i++ ){
            var word = words[i];
            html+="<li>"+word.word+" ["+word.type+"] -- "+word.desc+"</li>";
        }
        var ul = document.getElementById("words");
        ul.innerHTML = html;
        
    });
});
