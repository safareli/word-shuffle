define(['jquery'],function ($) {
    var k = {
        allWords:'allWords',
        todayWords:'todayWords',
        lastDay: 'lastDay' 
    },  perDayLimit = 40;
                    
    return {
        getTodays:function(){
            var words = [];  
            var deferred = $.Deferred();        
            if(k.allWords in localStorage)
                deferred.resolve(localStorage.getObj(k.allWords));
            else{
                deferred = $.ajax("/data/words.json").fail(function(){
                    console.log(arguments);
                }).done(function(data)  {
                    console.log(arguments);
                    return words;
                })
            }
            return deferred.pipe(function(allWords){
                localStorage.setObj(k.allWords,allWords);
                var todayWords = [];
                var thisDate = (new Date).getDate();
                if(localStorage.getItem(k.lastDay) != thisDate ){
                    localStorage.setItem(k.lastDay,thisDate);
                    for (var i = 0; i < perDayLimit; i++){
                        var id = Math.round(Math.random()*(allWords.length-1));
                        todayWords.push(allWords.splice(id, 1)[0]);
                    }
                    localStorage.setObj(k.allWords,allWords);
                    localStorage.setObj(k.todayWords,todayWords);
                } else {
                    todayWords = localStorage.getObj(k.todayWords);
                }
                return todayWords;
            }).promise();
         }
    };
});
