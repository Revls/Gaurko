'use strict';

module.exports = function(grunt) {
  var commit = require('fs').readFileSync('./.commit','utf8')  
  var path = require('path'), server
  commit = commit.replace('\n','').substr(0, 8)
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
          banner: '!function(){"use strict";const VERSION="' + commit + '";\n' 
          + 'var Gaurko = window.Gk = window.Gaurko = Em.Application.create();\n'
          + 'Gaurko.deferReadiness();\n\n',
          footer: 'Gaurko.advanceReadiness()}()'
        },
        src: ['app/scripts/**/*.js','app/scripts/app.js', '!app/scripts/templates.js'],
        dest: 'app/build/gaurko.js'
      },
      all:{
        src: ['app/vendor/**/*.js','app/build/build.js', 'app/build/gaurko.js'],
        dest: 'app/build/gaurko-all.js'
      },
      css: {
        options: {
          separator: ''
        },
        src: ['app/css/tuktuk.css',
          'app/css/tuktuk.icons.css',
          'app/css/tuktuk.theme.css',
          'app/css/**/*.css',
          'app/build/build.css'
          ],
        dest: 'app/build/gaurko.css'
      }
    }
  })


  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-ember-templates')

  grunt.registerTask('default', ['watch', 'ember_templates'])

}
