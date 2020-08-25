const sentence = "hello there from lighthouse labs";

let i = 1;

for (const char of sentence) {
  setTimeout(() => {
    
    process.stdout.write(char);

  }, 50 * i)

  i++;

  if (i > sentence.length) setTimeout(() => {
    
    console.log("")

  }, 50 * i);
}