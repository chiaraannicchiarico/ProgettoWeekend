module.exports = function(grunt)
{

	grunt.initConfig({
		serve: {
			options: {
				port: 9000
			}
		},
		browserify: {
			dist:{
				files:{
					'src/js/bundle.js' : 'src/js/weekendProject.js'
				}
			}
		},
		watch: {
			script: {
				files: 'src/js/weekendProject.js' ,
				tasks: 'browserify'
				
			}
		},
		cssmin: {
			files: 'src/js/style1.css',
			tasks: 'dist/css/style.min.css'
		
		}

	});

	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	grunt.task.registerTask('javascript',['watch']);
	grunt.task.registerTask('example',['cssmin']);
	grunt.task.registerTask('develop',['less','browserify','watch']);
	//watch deve gestire  le nostre modifiche 
	grunt.task.registerTask('build',['cssmin','browserify','babel', 'uglify','serve']);
	//cssmin minimizza il file css, inserisce jquere all'interno del file senza richiamare librerie, 
	//babel lo trasforma da ecma6 a ecma5, uglify minimizza il fili js, serve permette di caricare il server
	
	//grunt.task.registerTask('build',['browserify','serve']);

};