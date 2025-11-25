const numberToReversedDigits = (number) => {
   const result = String(number).split("").reverse().map(Number)
   
   return result
};

module.exports = numberToReversedDigits;
