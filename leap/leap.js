export const isLeap = (num) => {
  if (num % 400 == false) {
    return true
  } else if (num % 100 == false) {
    return false
  } else if (num % 4 == false) {
    return true
  } else {
    return false
  }
}
