module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            alive: {
                options: {
                    hostname : "*",
                    port: process.env.PORT || 3000,
                    base: "www",
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default',['connect']);
};