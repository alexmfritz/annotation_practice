// declaring the function buildABear that takes 5 parameters: name, age, fur, clothes, specialPower
function buildABear(name, age, fur, clothes, specialPower) {
// declaring the variable greeting - assigning a String that uses interpolation to call the function parameter name
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
// declaring the variable demographics - assigning an Array that holds the function parameters name, age
  var demographics = [name, age]
// declaring the variable powerSaying - assigning Strings that concatenates the function parameter specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?"
// declaring the variable builtBear - builtBear is an object literal with 6 key-value pairs
  var builtBear = {
// key-value pair #1 - key: basicInfo, value: calls the previous declared variable demographics (an Array that holds function parameters)
    basicInfo: demographics,
// key-value pair #2 - key: clothes, value: calls the function parameter clothes
    clothes: clothes,
// key-value pair #3 - key: exterior, value: calls the function parameter fur
    exterior: fur,
// key-value pair #4 - key: cost, value: Number 49.99
    cost: 49.99,
// key-value pair #5 - key: sayings, value: an Array that holds the previously declared variables greeting, powerSaying and a String
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// key-value pair #6 - key: isCudly, value: Boolean value of FALSE
    isCuddly: true,
  }
// will return the object literal key-values of builtBear
  return builtBear
}
// calls buildABear, provides new argument to the parameters
// expected output: [['Fluffy', 4], ['pants', jorts', 'tanktop'], brown, 49.99,
// ["Hey partner! My name is Fluffy - will you be my friend?", "Did you know that I can give you nightmares?", "Goodnight my friend!"],
// true]
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
// calls buildABear, provides new argument to the parameters
// expected output: [['Sleepy', 2], ['pajamas', 'sleeping cap'], purple, 49.99,
// ["Hey partner! My name is Sleepy - will you be my friend?", "Did you know that I can sleeping in?", "Goodnight my friend!"],
// true]
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')
