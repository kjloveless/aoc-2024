if (import.meta.main) {
  const decoder = new TextDecoder();
  const data = await Deno.readFile("input");
  const input = decoder.decode(data);
  let regex = /mul\([0-9]{1,3},[0-9]{1,3}\)/gim;

  const matches = input.match(regex);
  console.log(matches);

  let total = 0;
  for (let match of matches) {
    regex = /[0-9]{1,3}/gm;
    const numbers = match.match(regex);
    console.log(numbers);
    total += parseInt(numbers[0]) * parseInt(numbers[1]);
  }
  console.log(total);
}
