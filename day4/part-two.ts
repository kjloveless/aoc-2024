if (import.meta.main) {
  const decoder = new TextDecoder();
  const data = await Deno.readFile("input");
  const input = decoder.decode(data);

  let grid = [];

  let rows = input.split("\n");
  console.log(rows);
  for (let row of rows) {
    grid.push(row.split(""));
  }

  console.log(grid);

  console.log(findXmas(grid));
}

function findXmas(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    let xmasCount = 0;

    const isValid = (r, c) => {
        return r >= 0 && r < rows && c >= 0 && c < cols;
    };

    for (let r = 1; r < rows - 1; r++) {
        for (let c = 1; c < cols - 1; c++) {
          const left = grid[r - 1][c - 1] + grid[r][c] + grid[r +1][c + 1];
          const right = grid[r + 1][c - 1] + grid[r][c] + grid[r - 1][c + 1];

          if ((left == "MAS" || left == "SAM") && (right == "MAS" || right == "SAM")) {
            xmasCount++;
          }
        }
    }

    return xmasCount;
}
