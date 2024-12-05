if (import.meta.main) {
  const decoder = new TextDecoder();
  const data = await Deno.readFile("input");
  const input = decoder.decode(data);
  let regex = /mul\([0-9]{1,3},[0-9]{1,3}\)|do\(\)|don\'t\(\)/gmi; 

  const matches = input.match(regex);
  console.log(matches);

  let total = 0;
  let allow = true;
  for (let match of matches) {
    console.log(match);
    if (match == "don\'t()") {
      allow = false;
      continue;
    } else if (match == "do()") {
      allow = true;
      continue;
    }
    if (!allow) {
      continue;
    }
    regex = /[0-9]{1,3}/gm;
    const numbers = match.match(regex);
    console.log(numbers);
    total += parseInt(numbers[0]) * parseInt(numbers[1]);
  }
  console.log(total);
}
