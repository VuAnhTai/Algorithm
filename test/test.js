function findTemperatureUsually(temperatures, numberDate, numberTime) {
  const result = [];
  for (let date = 0; date < numberDate; date++) {
    // mapping count data
    const element = temperatures[date]
    let listCountTemperature = {}
    for (let time = 0; time < numberTime; time++) {
      listCountTemperature[element[time]] = 
      listCountTemperature[element[time]]
      ? {count: listCountTemperature[element[time]].count + 1, lastPosition: time} 
      : {count: 1, lastPosition: time}
    }
    // Find max
    let maxCount = null
    let maxTemperature = null
    let maxLastPosition = null
    Object.keys(listCountTemperature).forEach(item => {
      let count = listCountTemperature[item].count
      let lastPosition = listCountTemperature[item].lastPosition
      if (!maxTemperature || (count >= maxCount) ) {
        if (count === maxCount && lastPosition < maxLastPosition) {
          return
        }

        maxCount = count
        maxTemperature = item
        maxLastPosition = lastPosition
        return
      }
    })

    result.push(maxTemperature)
    listCountTemperature = null
  }

  return result
}

var temperatureList = 
{
  temperatures: [
    [23,24,24,25,26,26,27],
    [23,24,25,25,25,26,26],
    [23,24,24,24,25,26,26],
    [23,24,25,25,26,26,23],
    [23,24,25,25,25,26,26],
    [23,24,25,25,25,26,26]
  ],
}

console.log(findTemperatureUsually(temperatureList.temperatures, 6, 7))