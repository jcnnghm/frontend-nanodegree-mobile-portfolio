module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            portfolio: {
                src: 'img/*',
                dest: 'dist/'
            }
        },
        useminPrepare: {
            html: 'index.html'
        },
        usemin: {
            html: 'index.min.html'
        },
        inline: {
            options: {
                cssmin: true,
                uglify: true
            },
            portfolio: {
                src: 'index.html',
                dest: 'index.min.html'
            }
        }
    });

    grunt.registerTask('default', [
        'inline',
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'usemin',
        'copy'
    ]);
};