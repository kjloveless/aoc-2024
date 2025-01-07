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

    const directions = [
        [0, 1],   // right
        [0, -1],  // left
        [1, 0],   // down
        [-1, 0],  // up
        [1, 1],   // down-right diagonal
        [1, -1],  // down-left diagonal
        [-1, 1],  // up-right diagonal
        [-1, -1]  // up-left diagonal
    ];

    let xmasCount = 0;

    const isValid = (r, c) => {
        return r >= 0 && r < rows && c >= 0 && c < cols;
    };

    const checkWord = (r, c, dr, dc) => {
        const target = "XMAS";

        for (let i = 0; i < target.length; i++) {
            const currR = r + i * dr;
            const currC = c + i * dc;

            if (!isValid(currR, currC) || grid[currR][currC] !== target[i]) {
                return false;
            }
        }

        return true;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'X') {
                for (const [dr, dc] of directions) {
                    if (checkWord(r, c, dr, dc)) {
                        xmasCount++;
                    }
                }
            }
        }
    }

    return xmasCount;
}
