module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015'],
                plugins: ["transform-es2015-modules-amd"]
            },
            build: {
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'src/jass', // Src matches are relative to this path
                    src: ['**/*.js'], // Actual patterns to match
                    dest: 'src/j'
                }]
            }
        }
    });

    grunt.file.expand('./node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
    require('./node_modules/grunt-config-merge')(grunt);
};
