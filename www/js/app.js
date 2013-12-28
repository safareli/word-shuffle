require.config({

    baseUrl: '/vendor',
    deps: ["app/main"],
    paths: {
        app: '../js',
        'adapters': '../js/adapters',
        //templates: '../js/templates',
        jquery: 'jquery/jquery.min',
        //handlebars :'handlebars/handlebars',//handlebars.runtime.amd.min
        //hbs: 'requirejs-handlebars/hbs'
    },
    map: {
        '*': {
            'jquery': 'app/jquery-private',
        },
        'app/jquery-private': { 'jquery': 'jquery' }
    }

});
//requirejs.onResourceLoad = function(context, map, depArray) {
//    console.log(arguments);
//}


