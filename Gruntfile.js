module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        useminPrepare: {
            portfolio: {
                options: {
                    dest: '.',
                    staging: '.tmp'
                },
                src: 'index.html'
            },
            pizza: {
                options: {
                    staging: 'views/.tmp',
                    dest: 'views'
                },
                src: 'views/pizza.html'
            }
        },
        usemin: {
            portfolio: {
                src: 'index.dist.html'
            },
            pizza: {
                src: 'views/pizza.dist.html'
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
            },
            pizza: {
                src: 'views/pizza.html',
                dest: 'views/pizza.dist.html'
            }
        },
        htmlmin: {
            production: {
                options: {
                  removeComments: true,
                  collapseWhitespace: true
                },
                files: {
                    'index.min.html': 'index.dist.html',
                    'views/pizza.min.html': 'views/pizza.dist.html'
                }
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
        'htmlmin'
    ]);
};