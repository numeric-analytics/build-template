(function () {
    'use strict';
    module.exports = function (grunt) {
        // show elapsed time at the end
        require('time-grunt')(grunt);
        // load all grunt tasks
        grunt.loadNpmTasks('grunt-githooks');
        require('load-grunt-tasks')(grunt);

        // configurable paths
        var yeomanConfig = {
            src: 'src',
            dist: 'dist',
            temp: '.tmp'
        };

        grunt.initConfig({
            yeoman: yeomanConfig,
            pkg: grunt.file.readJSON('package.json'),
            githooks: {
              all: {
                // Will run the jshint and test:unit tasks at every commit
                'pre-commit': 'jshint'
              }
            },
            clean: {
                all: ['<%= yeoman.temp %>', '<%= yeoman.dist %>/*']
            },
            //
            jshint: {
                options: {
                    jshintrc: '.jshintrc',
                    reporter: require('jshint-stylish')
                },
                all: [
                    '<%= yeoman.src %>/*.js'
                ]
            },
            // Minification settings
            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
                }, dist: {
                    files: [
                        {
                            expand: true,
                            cwd: '<%= yeoman.src %>',
                            src: '**/*.js',
                            dest: '<%= yeoman.dist %>',
                            ext: '.min.js'
                        }
                    ]
                }
            }
        });

        // Default Tasks
        grunt.registerTask('hint', [
            'jshint',
            'clean:all',
            'uglify'
        ]);
        grunt.registerTask('default', [
            'clean:all',
            'uglify'
        ]);
    };
}());
