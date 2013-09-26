module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*\n' +
				' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
				' *  <%= pkg.description %>\n' +
				' *  <%= pkg.homepage %>\n' +
				' *\n' +
				' *  Copyright (c) <%= grunt.template.today("yyyy") %>\n' +
				' *  MIT License\n' +
				' */\n'
		},
		uglify: {
			my_target: {
		      files: {
		        'js/jet.min.js': ['js/jet.js']
		      }
		    }
		}
	});

	// These plugins provide necessary tasks.
  	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task.
  	grunt.registerTask('build', ['uglify']);

};