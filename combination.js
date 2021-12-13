

const result = [];
result.length = 3; //n=2

function combine(input, len, start) {
    if(len === 0) {
      console.log( result.join(" ") ); //process here the result
      return;
    }
    for (let i = start; i <= input.length - len; i++) {
      result[result.length - len] = input[i];
      combine(input, len-1, i+1 );
    }
  }
  


function getCombinations(array) {
    const results = [[]];
    for (let i = 0; i < array.length; i++) {
        const value = array[i]
		const copy = [...results]; // See note below.
        for (let j = 0; j < copy.length; j++) {
            const prefix = copy[j]
			results.push(prefix.concat(value));
		}
	}
	return results;
}

function getSubArrays(arr){
    if (arr.length === 1) return [arr];
    else {
        subarr = getSubArrays(arr.slice(1));
        return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
    }
}

// combine(["apple", "banana", "lemon", "mango"] , result.length, 0);
console.log(getCombinations(["apple", "banana", "lemon", "mango"]).length)
console.log(getSubArrays(["apple", "banana", "lemon", "mango"]).length)