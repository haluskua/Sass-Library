const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("sass/**/*.scss")
    .pipe(sass())
    .pipe(prefix(["last 3 versions"], { cascade: true }))
    .pipe(purgecss({ content: ["*.html"] }))

    .pipe(dest("css"));
}

function watchTask() {
  watch(["sass/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
