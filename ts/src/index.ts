const sayHello = (input: string) => {
  // TODO: Receive input.
  const lines = input.split(/\n/);
  const n = parseInt(lines[0]);
  // TODO: Process here.
  // TODO: Output ans.
  console.log(`Hello, ${input}`);
}

sayHello(require("fs").readFileSync("/dev/stdin", "utf8"));