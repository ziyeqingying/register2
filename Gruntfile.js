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
    grunt.registerTask("minify", ['htmlmin']);
}