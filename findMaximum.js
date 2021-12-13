let count1 = 0
function findMaximum(n, count) {
  const length = n.length
  if (length === 1) {
      return [n[0], 1];
  }

  if (length === 2) {
      if (n[0] < 0 && n[1] < 0) {
          return n[0] < n[1] ? [n[1], count || 1] : [n[0], count || 1];
      }

      if (n[0] < 0) {
          return [n[1], count || 1];
      }

      if (n[1] < 0) {
          return [n[0], count || 1];
      }

      return [n[0] + n[1], count ? count + 1 : 2]
  }

  [total, count] = findMaximum([n[length - 1], n[length - 2]], count)
  n = n.slice(0, n.length -2)
  n.push(total)
  return findMaximum(n, count)
}

console.log(findMaximum([1, 2 ,3 ,4 ,5], 0))