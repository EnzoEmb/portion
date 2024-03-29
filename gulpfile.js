const gulp = require('gulp');
const terser = require('gulp-terser');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

// compile js
gulp.task('js', function (done) {
    // gulp.src('src/index.js')
    //     .pipe(plumber())
    //     .pipe(terser())

    //     .pipe(rename('portion.min.js'))
    //     .pipe(gulp.dest('./dist/'));

    gulp.src('src/index.js')
        .pipe(plumber())
        .pipe(rename('portion.js'))
        .pipe(gulp.dest('./dist/'));

    done();
});

// compile sass
gulp.task('sass', function (done) {

    // gulp.src('src/index.scss')
    //     .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    //     .pipe(rename('enami.min.css'))
    //     .pipe(gulp.dest('./dist/'));

    gulp.src('src/index.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(rename('portion.css'))
        .pipe(gulp.dest('./dist/'));

    // gulp.src('test/test.scss')
    //     .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    //     .pipe(gulp.dest('./test/'));

    done();
});

//watch
gulp.task('dev', gulp.series(['js', 'sass'], function dev(done) {
    gulp.watch(['src/index.js'], gulp.series(['js']));
    gulp.watch(['src/**/*.scss', 'test/**/*.scss'], gulp.series(['sass']));
    done();
}));

// build
gulp.task('build', gulp.series(['js', 'sass'], function (done) {
    done();
}));

gulp.task('default', gulp.series(['dev']));