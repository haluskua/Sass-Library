const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// compiling sass into css

function buildStyles() {
  return src("shinobi/**/*.scss").pipe(sass()).pipe(dest("css"));
}

//ACTIVELY WATCH src file

function watchTask() {
  watch(["shinobi/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
