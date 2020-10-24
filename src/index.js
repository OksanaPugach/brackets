  module.exports = function check(str, bracketsConfig) {
  const openBracket = bracketsConfig.map((item) => item[0]);
  const closeBraket = bracketsConfig.map((item) => item[1]);
  const caretaker = [];
  for (let i = 0; i < str.length; i += 1) {
    const openIndex = openBracket.indexOf(str[i]);
    const closeIndex = closeBraket.indexOf(str[i]);

    if (closeIndex === openIndex) {
      if (caretaker.length > 0 && caretaker[caretaker.length - 1] === closeIndex) {
        caretaker.pop()
      } else {
        caretaker.push(openIndex);
      }
    } else if (openIndex !== -1) {
      caretaker.push(openIndex)
    } else {
      if (caretaker[caretaker.length - 1] === closeIndex) {
        caretaker.pop();
      } else return false;
    }
  }
  
  return caretaker.length === 0;
}
