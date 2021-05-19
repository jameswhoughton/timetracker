const total = (start, end) => {
  const startTime = start.split(':')
  const endTime = end.split(':')
  const startTotal = parseInt(startTime[0] * 60) + parseInt(startTime[1])
  const endTotal = parseInt(endTime[0]) * 60 + parseInt(endTime[1])
  
  return  endTotal - startTotal;
}

const roundTime = (time) => {
  // Always round up for the first 15 mins.
  if(time < 15) { return 15 }

  return 15 * Math.round(time / 15);
}

export { total, roundTime }