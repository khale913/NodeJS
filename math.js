const { builtinModules } = require("module");

const add = (x , y) => x + y;

const PI = 3.14159;

const square = x => x * x;

exports.square = square;
exports.PI = PI;
exports.add = add;

// const math = {
//     add: this.add,
//     PI: this.PI,
//     square: this.square,
// }

// module.exports = math;

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;