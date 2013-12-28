define(['app/storage','adapters/words'], function (storage,wordsAdapter) {
    if(!storage.normalize()) return alert("localStorage is'n suported in your fucking browser :)))))))");
    wordsAdapter.getTodays().done(function(words){
        window.todo = words;
        console.log(todo);
    });
});
