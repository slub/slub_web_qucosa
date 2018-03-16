
module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "Resources/Public/Css/MUSICONN/main.css" : "Resources/Private/Less/MUSICONN/main.less",
                }
            }
        },
        uglify: {
            development: {
                options: {
                    compress: true,
                    preserveComments: false,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "Resources/Public/Js/MUSICONN/custom-dist.js" : ['Resources/Private/JavaScript/MUSICONN/custom.js'],
                }
            }
        },
        watch: {
            styles: {
                files: ['Resources/Private/Less/MUSICONN/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            js: {
                files: ['Resources/Private/JavaScript/MUSICONN/*.js'],
                tasks: ['uglify']
            }
        }
    });
    grunt.registerTask('default', ['less','uglify','watch']);
};
