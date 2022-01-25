let grid = [
            [1,3,1],
            [1,5,1],
            [4,2,1]
           ];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const steps = Array(grid[0].length).fill(0);
  console.log(`start, steps: ${steps}`);
  grid.forEach((m, i) => {
    m.forEach((n, j) => {
      if (!i && !j) steps[j] = n;
      else if (!i) {
        steps[j] = n + steps[j - 1];
      } else if (!j) {
        steps[j] += n;
      } else {
        steps[j] = n + Math.min(steps[j - 1], steps[j]);
      }
      console.log(`steps: ${steps}\n left:${steps[j - 1]}, top:${steps[j]}\n`);
    });
  });
  return steps.pop();
};
console.log(minPathSum(grid));