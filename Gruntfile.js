'use strict';

module.exports = function(grunt) {
  
  var path = require('path'), server
  // Project configuration.
  grunt.initConfig({
    watch:{
      ember_templates: {
       files: 'app/templates/**/*.hbs',
       tasks: ['ember_templates']
      },
      js: {
        files: 'app/scripts/**/*.js',
        tasks: ['concat:dist']
      },
      css: {
        files: 'app/css/**/*.css',
        tasks: ['concat:css']
      }
    },
    ember_templates:{
      compile: {
        options: {
          templateName: function (sourceFile) {
            return sourceFile.replace(/app\/templates\//, '')
                             .replace(/\.hbs$/, '')
                             .replace(/(?!^_)(_)(?=_|\w){1}?/g, '/')
          }
        },
        files: {
          'app/scripts/templates.js': 'app/templates/**/*.hbs'
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        options: {
          banner: '!function(){"use strict";\n',
          footer: '}()'
        },
        src: ['app/scripts/app.js','app/scripts/**/*.js', '!app/scripts/templates.js'],
        dest: 'app/build/gaurko.js'
      },
      all:{
        src: ['app/vendor/**/*.js', 'app/scripts/**/*.js'],
        dest: 'app/build/gaurko-all.js'
      },
      css: {
        options: {
          separator: ''
        },
        src: ['app/css/tuktuk.css',
          'app/css/tuktuk.icons.css',
          'app/css/tuktuk.theme.css',
          'app/css/**/*.css'],
        dest: 'app/build/gaurko.css'
      }
    }
  })


  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-ember-templates')

  grunt.registerTask('default', ['watch', 'ember_templates'])

}
