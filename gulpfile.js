const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");

function buildStyles() {
  return src("shinobi/**/*.scss")
    .pipe(sass())
    .pipe(prefix(["last 3 versions"], { cascade: true }))
    .pipe(dest("css"));
}

function watchTask() {
  watch(["shinobi/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
