
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix ? matrix.reduce((ac,el, i) => ac.concat(i % 2 === 0 ? el : el.reverse()),[]) : []
}
