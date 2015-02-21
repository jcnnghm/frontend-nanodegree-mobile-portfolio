module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        useminPrepare: {
            portfolio: {
                options: {
                    dest: '.'
                },
                src: 'index.html'
            }
        },
        usemin: {
            portfolio: {
                src: 'index.dist.html'
            }
        },
        inline: {
            options: {
                cssmin: true,
                uglify: true
            },
            portfolio: {
                src: 'index.html',
                dest: 'index.dist.html'
            }
        }
    });

    grunt.registerTask('default', [
        'inline',
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'usemin'
    ]);
};