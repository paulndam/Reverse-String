//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {

  //step 1 use split method to split the string
  let splitString = string.split("")

  // step 2 , use reverse method to reverse the new created array or string
  let reverseString = splitString.reverse()

  // step 3 use join method to join the string array
  let joinAllString = reverseString.join("")

  return joinAllString
  
  
};
