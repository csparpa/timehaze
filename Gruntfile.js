module.exports = function(grunt) {

    grunt.initConfig({
        jasmine_node: {
            options: {
                forceExit: true,
                showColors: true,
                match: '.',
                matchall: false,
                extensions: 'js',
                specNameMatcher: 'spec',
                jUnit: {
                    report: true,
                    savePath: "./build/reports/jasmine/",
                    useDotNotation: true,
                    consolidate: true
                }
            },
            all: ['specs/']
        }
    });

    grunt.loadNpmTasks('grunt-jasmine-node');

    grunt.registerTask('default', ['jasmine_node']);

}