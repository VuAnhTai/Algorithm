
const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

// Sample code to perform I/O:
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function findMaximum(n, arr) {
    const length = n.length
    if (length === 1) {
        return [n[0], 1]
    }

    arr = arr.sort()
    let maxNegetive = -Infinity
    let total = 0;
    let count = 0;
    arr.forEach(item => {
        if (item < 0) {
            maxNegetive = item > maxNegetive ? item: maxNegetive
            return
        }
        console.log(item)
        total += item;
        count++
    })
    if (count === 0) {
        total = maxNegetive
        count = 1
    }

    return [total, count]
}

function main(input) {
    let [n, arr] = input.split('\n');
    arr = arr.split(' ').map(item => +item)
    
    process.stdout.write(`${findMaximum(n, arr)}`)
    // process.stdout.write(`${findMaximum(n, arr).reduce((str, item) => { return str + ' ' + item}, '')}`);
}