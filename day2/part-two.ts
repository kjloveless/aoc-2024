if (import.meta.main) {
  const decoder = new TextDecoder();
  const data = await Deno.readFile("input");
  const input = decoder.decode(data);

  const lines = input.split("\n");

  let total_safe = 0;
  for (let line of lines) {
    if (validateLevel(line)) {
      total_safe++;
    }
  }
  console.log(total_safe);
}


function validateLevel(line: string) {
  const iterations = line.split(" ").length;
  console.log(`iterations = ${iterations}`);
  for (let i = 0; i <= iterations; i++) {
    let elements = line.split(" ");
    if (i > 0) {
      elements.splice(i - 1, 1);
    }
    console.log(`${i} = ${elements}`)

    let count = true;
    let raising = false;
    let falling = false;
    for (let j = 0; j < elements.length - 1; j++) {
      const diff = elements[j] - elements[j + 1];

      if (diff === 0) {
        count = false;
        break;
      }
      if (diff < 0) falling = true;
      if (diff > 0) raising = true;
      if (raising && falling) {
        count = false;
        break;
      }

      const abs_diff = Math.abs(diff);

      if (abs_diff > 3) {
        count = false;
        break;
      }
    }

    if (count) {
      return count;
    }
  }
}
