var dataParser = require('data-file-parser');
dataParser.parse({
    in: 'www/data/words.txt',
    out: 'www/data/words.js',
    var:'words',
    // g for global 
    // i for ignore case
    // m fot ^ to be start of every line not whole string
    regex: /^([a-z\-]+) ([a-z]+)\. (.+)/gim,
    as:'word|type|desc'
}).then(function(arr){
    console.log(arr.length+" words");
})