// Gulp.js configuration
const
    // modules
    gulp = require("gulp"),
    header = require("gulp-header"),
    htmlmin = require("gulp-htmlmin"),
    cssnano = require("gulp-cssnano"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    babel = require("gulp-babel"),
    uglify = require("gulp-uglify"),
    pump = require("pump");

    // development mode?
    devBuild = (process.env.NODE_ENV !== "production"),

    // HTML processing
    gulp.task("html-min", function(cb) {
        pump([
            gulp.src("index.html"),
            htmlmin({
                collapseWhitespace: true,
                conservativeCollapse: true
            }),
            header("<!-- To see the unminified version visit https://github.com/oskarwilczynski/pomodoro/blob/master/index.html -->\n\n"),
            gulp.dest("../portfolio-site/dist/projects/pomodoro/")
        ], cb);
    });

    // SCSS -> CSS processing
    gulp.task("css-min", function(cb) {
        pump([
            gulp.src("styles/main.scss"),
            sass(),
            autoprefixer(),
            cssnano(),
            header("/* To see the unminified version visit https://github.com/oskarwilczynski/pomodoro/blob/master/styles/main.scss */\n\n"),
            gulp.dest("../portfolio-site/dist/projects/pomodoro/styles/")
        ], cb);
    });

    // JS + Babel processing
    gulp.task("js-min", function(cb) {
        pump([
            gulp.src("scripts/main.js"),
            babel({presets: ["env"]}),
            uglify(),
            header("// To see the unminified version visit https://github.com/oskarwilczynski/pomodoro/blob/master/scripts/main.js\n\n"),
            gulp.dest("../portfolio-site/dist/projects/pomodoro/scripts/")
        ], cb);
    });

    // run all tasks
    gulp.task("min-all", ["html-min", "css-min", "js-min"]);

;
