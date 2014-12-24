module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ["flags/css"]
        },
        files: [
          {
            expand: true,
            cwd: 'flags/less',
            src: ['*.less'],
            dest: 'flags/css/',
            ext: '.css'
          }
        ]
      },
      production: {
        options: {
          paths: ["flags/css"],
          cleancss: true
        },
        files: [
          {
            expand: true,
            cwd: 'flags/less',
            src: ['*.less'],
            dest: 'flags/css/',
            ext: '.css'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less']);

};