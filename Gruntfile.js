module.exports = function(grunt) {

	grunt.initConfig({

		concat: {
			dist: {
				files: [
					{src: ['js/main.js', 'packages/*.js'], dest: 'dist/js/mochi.js'}
				]
			}
		},

		uglify: {
			dist: {
				files: [{src: ['dist/js/mochi.js'], dest: 'dist/js/mochi-min.js'}]
			}
		},

		watch: {
			scripts: {
				files: ['js/*.js', 'packages/*.js'],
				tasks: ['concat'],
				options: {
					debounceDelay: 100,
				},
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat','uglify','watch']);

};