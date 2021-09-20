// this is a function called addNumbers
function addNumbers() {
// declaring the variable firstNum - giving it a Number value of 9
  var firstNum = 9
// declaring the variable secondNum - giving it a Number value of 14
  var secondNum = 14

// re-assigning the variable firstNum - new Number value of 3
  firstNum = 3
// re-assigning the variable secondNum - new Number value of 4
  secondNum = 4

// declaring the variable nums - assigning it an Array with the values of the previously declared variables: firstNum and secondNum
  var nums = [firstNum, secondNum]
// declaring the variable product - assigning it a value equal to the PRODUCT of previously declared variables: firstNum and secondNum
  var product = firstNum * secondNum
// declaring the variable sum - assigning it the value equal to the SUM of previously declaring variables: firstNum and secondNum
  var sum = firstNum + secondNum
// declaring the variable average - assigning it the value equal to the AVG of previous declared variable sum divided by length of the nums Array
  var average = sum / nums.length

// logging to the console the element associated with the 0 Index of the nums Array, which is equal to 3
  console.log(nums[0])
// logging to the console the element associated with the 1 Index of the nums Array, which is equal to 4
  console.log(nums[1])
// logging to the console a String that interpolates with variables num1 and num2
  console.log(`The first number is ${num1} and the second number is ${num2}!`)
// returns to the computer the exact computation of the equation assigned to the variable sum
  return sum
}
