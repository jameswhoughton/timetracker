export const minutesToString = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const remainder = minutes - (hours * 60)
  
  return  `${hours.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`
}

export const roundMinutes = (time: number): number => {
  // Always round up for the first 15 mins.
  if(time < 15) { return 15 }

  return 15 * Math.round(time / 15)
}