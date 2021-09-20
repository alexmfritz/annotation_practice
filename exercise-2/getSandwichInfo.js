// declares the function getSandwichInfo
function getSandwichInfo() {
// declaring the variable sandwichs - assigning an Array with 6 different Strings
  var sandwiches = ['Philly cheesesteak', 'Italian sub', 'Reuben', 'Bahn Mi', 'Nashville Hot Chicken', 'Caprese']
// declaring the variable whatIsShift - assigning the value of the result of the .shift() Array method being performed
// .shift() Array method performs action to remove first element in Array
// expected output: ['Italian sub', 'Reuben', 'Bahn Mi', 'Nashville Hot Chicken', 'Caprese']
  var whatIsShift = sandwiches.shift()
// declaring the variable whatIsPop - assigning the value of the result of the .pop() Array method being performed
// .pop() Array method performs action to remove last element in Array
// expected output: ['Philly cheesesteak', 'Italian sub', 'Reuben', 'Bahn Mi', 'Nashville Hot Chicken']
  var whatIsPop = sandwiches.pop()
// declaring the variable whatIsLength - assigning the Number value of the length of the previously declared sandwiches Array
// expected output: 5
  var whatIsLength = sandwiches.length
// declaring the variable whatIsIndex - assigning the data type result of calling the Index number of the previously declared sandwiches Array
// expected output: 'Reuben'
  var whatIsIndex = sandwiches[2]
// calling a iteration via for loop
// initializing the loop with a value equal to the lenght of the array (5)
// setting the test condition to break the loop when the value reaches 0
// setting the updater to decrement by a value of 1 each time
  for (var i = sandwiches.length - 1; i >= 0; i--) {
// logging to the console a String each iteration of the loop, using interpolation to change the String value of the sandwich Array
// based on the index value associated with the loop value
    console.log(`Hmmmm... Lemme get uh... Ummm... I'll take a ${sandwiches[i]} please. Thanks.`)
  }
// declaring the variable dinnerSpecial - assigning an Array with multiple data types, incl. a call back to previous assigned
// Array elements + new Strings
// expected output: ['Italian sub', 'Nashville Hot Chicken', 'fries', 'two drinks']
  var dinnerSpecial = [sandwiches[1], sandwiches[sandwiches.length - 1], 'fries', 'two drinks']
// logging to the console the 0 index of the previous declared variable dinnerSpecial
// expected output: ['Italian sub']
  console.log(dinnerSpecial[0])
// re-assigning the value of the 3 Index of previously declared variable dinnerSpecial - the String 'two drinks' now is 'a coupla Baja Blasts'
  dinnerSpecial[3] = 'a coupla Baja Blasts'
// logging to the console the 2 index of the previous declared variable dinnerSpecial
// expected output: ['fries']
  console.log(dinnerSpecial[2])
// re-assigning the value of the 2 Index of the previously declared variable dinnerSpecial - the String 'fries' now is 'onion rings'
  dinnerSpecial[2] = 'onion rings'

// declaring the variable dailySpecial - assigning an Array with multiple data types, incl. a call back to previous assigned
// Array elements + new Strings
// expected output: ['Philly cheesesteak', 'chips', 'drink']
  var dailySpecial = [sandwiches[0], 'chips', 'drink']
// logging to the console the 2 Index value of previously declared variable dailySpecial
// expected output: ['drink']
  console.log(dailySpecial[2])
// re-assigning the 0 Index value of previously declared variable dailySpecial - the call back to the 0 Index of previously declared Array sandwiches
// ['Philly cheesesteak'] now is ['Chesseburkle']
  dailySpecial[0] = 'Chesseburkle'
// logging to the console the Array elements assigned to the previously declared variable dailySpecial
// expected output: ['Chesseburkle', 'chips', 'drink']
  console.log(dailySpecial)
// re-assigning the 0 Index element from previously declared variable dailySpecial to the 3 Index element from previously declared variable sandwiches
// ['chips'] is now ['a coupla Baja Blasts']
  dailySpecial[1] = sandwiches[3]
}
