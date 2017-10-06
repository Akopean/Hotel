/**
 * Project path
 */
let srcDir = 'app',
    publicDir = '..';
	//publicDir = 'dist';
export default {
    entries: {
        css: [`./${ srcDir }/css/style.scss`],
        js: [`./${ srcDir }/js/app.js`]
    },
    vendor: {
        js: [
        './bower_components/modernizr/modernizr.js',
        //'./node_modules/jquery/dist/jquery.js',
		'./node_modules/wowjs/dist/wow.min.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        //'./bower_components/foundation/js/foundation.min.js',
        //'./bower_components/AniJS/dist/anijs.js',
		//'./bower_components/AniJS/dist/helpers/dom/anijs-helper-dom.js',
        ]
    },
    all: {
        html: `${ srcDir }/*.html`,
        template: `${ srcDir }/**/*.html`,
        js: `${ srcDir }/js/**/*.js`,
        css: `${ srcDir }/css/**/*.scss`,
        fonts: [`${ srcDir }/fonts/**/*.*`],
        images: `${ srcDir }/images/**/*.{gif,jpg,png,svg}`
    },
    dest: {
        js: `${ publicDir }/js`,
        css: `${ publicDir }/css`,
        html: `${ publicDir }/`,
        fonts: `${ publicDir }/fonts`,
        images: `${ publicDir }/images`
    },
    publicDir: publicDir
}
