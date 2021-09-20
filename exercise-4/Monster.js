// declares the class Monster
class Monster {
// initializes the class Monster, assigning the parameters: name, nickname, teeth, demeanor, location
  constructor(name, nickname, teeth, demeanor, location) {
// this refers to the owner, class Monster, its property of name has the value of parameter name
    this.name = name;
// this refers to the owner, class Monster, its property of nickname has the value of parameter nickname
    this.nickname = nickname;
// this refers to the owner, class Monster, its property of teeth has the value of parameter teeth
    this.teeth = teeth;
// this refers to the owner, class Monster, its property of demeanor has the value of parameter demeanor
    this.demeanor = demeanor;
// this refers to the owner, class Monster, its property of location has the value of parameter location
    this.location = location;
// this refers to the owner, class Monster, its property of isScary has the static value of true (does not take a parameter)
    this.isScary = true;
  }
// class Method roar will take the action of logging "RARRRRR" to the console if called
  roar() {
    console.log('RARRRR')
  }
// class Method changeName takes the parameter newName
  changeName(newName) {
// assigns the new parameter to class Monster's property this.name
    this.name = newName
// returns a String interpolating the argument taken on when the method changeName is called
    return `I go by ${this.name} now!`
  }
// class Method visitDentist takes the parameter newTeeth
  visitDentist(newTeeth) {
// assigns the new parameter to class Monster's property this.teeth
    this.teeth = newTeeth
// stores argument taken by method changeName in the class Monster's property this.teeth (does not print)
  }
// class Method changeMood takes the parameter newMood, assigns the new parameter to class Monster's property this.demeanor
  changeMood(newMood) {
// assigns the new parameter to class Monster's property this.demeanor
    this.demeanor = newMood
// logs to the console a String that concatenates the new class Method property this.demeanor
    console.log("Now all of a sudden I feel very " + this.demeanor + "!")
  }
}
