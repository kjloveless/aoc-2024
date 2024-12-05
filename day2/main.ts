if (import.meta.main) {
  const decoder = new TextDecoder();
  const data = await Deno.readFile("input");
  const input = decoder.decode(data);

  const lines = input.split("\n");

  let total_safe = 0;

  for (let line of lines) {
    const elements = line.split(" ");

    let count = true;
    let raising = false;
    let falling = false;
    for (let i = 0; i < elements.length - 1; i++) {
      if (isNaN(elements[i])) break;
      const diff = elements[i] - elements[i + 1];

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
    if (count) total_safe++;
    console.log(`${elements} - ${total_safe}`);
  }
  console.log(total_safe);
}
