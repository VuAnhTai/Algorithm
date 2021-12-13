function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

function lcm(a, b) {
    const gcdNumber = gcd(a, b);
    if (!gcdNumber) {
        return 0
    }

    return a * b / gcdNumber
}

function findMinLcm(n) {
    let result = 1;
    for (i = 2; i <= n; i++) {
        result = lcm(result, i)
    }
    
    return result
}


console.log(findMinLcm(5))