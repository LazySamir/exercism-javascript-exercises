export const toRna = (str) => {
  // const rnaMap = { "G":"C" , "C":"G" , "G":"C" , "T":"A" , "A":"U" };
  return str.replace("C", "G")
}
