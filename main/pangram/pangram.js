export const isPangram = (string) => {
  let allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let remainingLetters = [];
  let array = string.trim().toLowerCase().split('');

  array.forEach(function(ele){
    if ((allLetters.includes(ele)) && !(remainingLetters.includes(ele))) {
      remainingLetters.push(ele);
    }
  })

  return (remainingLetters.sort().join() == allLetters.join());
}
