function printBinary (x) {
  let tmp = '';
  x.forEach(i => {
    tmp += i + ','
  });
   return tmp
}

function binGen(n, x, i) {
  [1, 2, 3, 12, 6, 6].forEach(item => {
    x[i] = item
    if (i === n-1) {
      console.log(x)
    } else {
      binGen(n, x, i + 1)
    }
  });
}

const n = 2
binGen(n, Array.from({length: n}, (_, i) => 0), 0)