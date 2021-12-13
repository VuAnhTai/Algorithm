function genDivisors(arr)
{
    const n = arr.length
    var high = 0;
    for (var i = 0; i < n; i++)
        high = Math.max(high, arr[i]);
  
    var divisors =
    Array.from({length: high + 1}, (_, i) => 0);
    // Iterating over every element
    for (var i = 0; i < n; i++)
    {
        // Calculating all the divisors
        for (var j = 1; j <= Math.sqrt(arr[i]); j++)
        {
          // Divisor found
          if (arr[i] % j == 0)
          {
              // Incrementing count for divisor
              divisors[j]++;

              // Element/divisor is also a divisor
              // Checking if both divisors are
              // not same
              if (j != arr[i] / j)
                  divisors[arr[i] / j]++;
          }
        }
    }
  
    return divisors
}

function findMax(A, B) {
  const divisorsA = genDivisors(A);
  const divisorsB = genDivisors(B);
  let maxGCD = 0;
  for (let index = divisorsA.length - 1; index >= 0; index--) {
    if (divisorsA[index] > 0 && divisorsB[index] > 0) {
      maxGCD = index
      break
    }
  }

  const tempA = A.filter(item => item%maxGCD === 0)
  const tempB = B.filter(item => item%maxGCD === 0)
  // console.log(tempA, tempB, Math.max(tempA), Math.max(tempB))
  return Math.max(...tempA) + Math.max(...tempB)
}

var A = [12];
var B = [5, 2, 4, 12, 4];

console.log(findMax(A, B))