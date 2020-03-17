module.exports = function(grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            files: {
                src: "./index.html",
                dest: "./index.min.html"   
            }
        }
    })
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ['htmlmin']);
}