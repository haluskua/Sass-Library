const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// compiling sass into css

function buildStyles() {
  return src("*.scss").pipe(sass()).pipe(dest("css"));
}

//ACTIVELY WATCH src file

function watchTask() {
  watch(["*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
