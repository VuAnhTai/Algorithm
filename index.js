function findMaxGCD(arr , n)
{
    // Computing highest element
    var high = 0;
    for (var i = 0; i < n; i++)
        high = Math.max(high, arr[i]);
  
    // Array to store the count of divisors
    // i.e. Potential GCDs
    var divisors =
    Array.from({length: high + 1}, (_, i) => 0);
    console.log(high, divisors)
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
  
    console.log(divisors)

    // Checking the highest potential GCD
    for (var i = high; i >= 1; i--)
        // If this divisor can divide at least 2
        // numbers, it is a GCD of at least 1 pair
        if (divisors[i] > 1)
            return i;

    return 1;
}

var arr = [ 1, 2, 4, 8, 8, 12, 12];
var n = arr.length;
var x = findMaxGCD(arr,n)

console.log(x)