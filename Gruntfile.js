module.exports = function(grunt)
{




	grunt.initConfig({
		serve:{
			option:{
				port:900
			}
		},
		browserify:{
			dist:{
				files:{
					'src/js/bundle.js':'src/js/weekendProject.js'
				}
			}
		},
		uglify: {
			dist: {
				files: {

					'dist/js/weekendProject.min.js' : [
					'src/js/bundle-es5.js',
					'node_modules/bootstrap/dist/js/bootstrap.js'
					]
				}
			}
			
		},
		cssmin: {
			dist: {
				files: {

					'dist/css/style.min.css' : [
					'node_modules/bootstrap/dist/css/bootstrap.css',
					'src/css/style.css'
					]
				}
			}
		},
		less: {
			dist:{
				files: {
					'src/css/style.css' : 'src/css/style.less'
				}
			}
		},
		babel:{
			options:{
				presets:['env']
			},
			dist:{
				files:{
					'src/js/bundle-es5.js':'src/js/bundle.js'
				}
			}

		},
		watch: {
			configJs: {
				files: 'src/js/weekendProject.js',
				tasks: 'browserify'
			},
			configCss: {
				files: 'src/css/style.less',
				tasks: 'less'
			}
		}
	});


	//loadNpmTasks serve per caricare il tipo di task
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.task.registerTask('develop',['watch']);
	grunt.task.registerTask('build',['cssmin', 'browserify','babel','uglify','serve']);
};

	//grunt.task.registerTask('javascript',['watch']);
	//grunt.task.registerTask('example',['cssmin']);
	//grunt.task.registerTask('develop',['less','browserify','watch']);
	//watch deve gestire  le nostre modifiche 
	


	//grunt.task.registerTask('build',['cssmin','browserify','babel', 'uglify','serve']);
	//cssmin minimizza il file css, inserisce jquere all'interno del file senza richiamare librerie, 
	//babel lo trasforma da ecma6 a ecma5, uglify minimizza il file js, serve permette di caricare il server
	
	//grunt.task.registerTask('build',['browserify','serve']);
	//broseryfy include librerie jquery 
