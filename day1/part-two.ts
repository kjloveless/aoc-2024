if (import.meta.main) {
  const decoder = new TextDecoder();
  const data = await Deno.readFile("input");
  const input = decoder.decode(data);
  
  const lines = input.split("\n");

  let result = 0;
  let left = [];
  let right = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].split(' ');
    const parts = line.filter((elem) => elem.length > 0);
    
    left.push(parseInt(parts[0]));
    right.push(parseInt(parts[1]));
  }

  left.sort();
  right.sort();

  for (let i = 0; i < left.length; i++) {
    if (isNaN(left[i])) continue;
    let count = 0;
    right.forEach((x) => {
      if (x == left[i]) {
        count++;
      }
    });
    result += Math.abs(left[i] * count);
  }
  console.log(result);
}
