console.log('i love homework')
    // Example

// The purpose of this first exercise is just to show how 
// assertions work and how the homework should be carried out. 
// We'll do it together in class.

// Part EXAMPLE

// Write a function called addOne() that returns the input number, plus one. 

var addOne = function(num) {
        var result = num + 1
        console.log('result from addOne>>>>' + result)
        return result
    }
    // console.log(addOne(1))
console.assert(addOne(1) === 2)

// Part 0

// Fix the following code so that the assertion passes. 

var doubleNum = function(num) {
    var newNum = num * 2
    console.log('results from doubleNum>>>>>' + newNum)
    return newNum
}

console.assert(doubleNum(5) === 10)


/**
 * PART 1
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */

var sum = function(sum1, sum2) {
        var sumTot = sum1 + sum2
            // console.log('sum result>>>>' + sumTot)
        return sumTot
    }
    // console.log(sum(1, 3))
console.assert(sum(8, 11) === 19)
console.assert(sum(4, 100) === 104)

// PART 2

// Write a function called average that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside 
// of your average function.

var average = function(avg1, avg2) {
    var preAvg = sum(avg1, avg2)
    var avg = preAvg / 2
        // console.log('results for average>>>>' + avg)
    return avg
}

console.assert(average(8, 12) === 10)
console.assert(average(100, 200) === 150)

/**
 * PART 3
 *
 * Modify your sum function so that if either of its 
 inputs is not a number, it will return "null."
 */


var sum = function(sum1, sum2) {
    if ((typeof sum1 === 'number') && (typeof sum2 === 'number')) {
        var sumTot = sum1 + sum2
            // console.log('sum result>>>>' + sumTot)
        return sumTot
    } else {
        return null
    }
}

console.assert(sum(867, 5309) === 6176);
console.assert(sum('867', 5309) === null);
console.assert(sum(true, 5) === null);


// Part 4

// Write a function called isNegative that will tell 
// whether a number is negative or not. 

var isNegative = function(isNeg) {
    if (isNeg < 0) {
        return true
    } else {
        return false
    }
}

console.assert(isNegative(10) === false)
console.assert(isNegative(0) === false)
console.assert(isNegative(-999) === true)


// Now, modify your sum function again, so that it 
// will return null if any of the inputs is negative.
// To avoid repeating yourself, use your isNegative 
// function inside your sum funciton ***

var sum = function(sum1, sum2) {
    if ((isNegative(sum1)===false) && (isNegative(sum2)===false)) {
        if ((typeof sum1 === 'number') && (typeof sum2 === 'number')) {
            var sumTot = sum1 + sum2
                // console.log('sum result>>>>' + sumTot)
            return sumTot
        } else {
            return null
        }
    } else {
        return null
    }
}


console.assert(sum(5, -5) === null)


// Part 5

// Write a function that will find the minimum of four 
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither). 

var minimum = function(in1, in2, in3, in4){
	if ((in1<in2) && (in1<in3) && (in1<in4)){
		return in1
	} else if ((in2<in1) && (in2<in3) && (in2<in4)){
		return in2
	} else if ((in3<in2) && (in3<in1) && (in3<in4)){
		return in3
	} else if ((in4<in2) && (in4<in3) && (in4<in1)){
		return in4
	}
}

console.assert(minimum(1, 2, 4, 0) === 0)
console.assert(minimum(1000, -2, -99, 50) === -99)
console.assert(minimum(-1000, -2, -99, 50) === -1000)
console.assert(minimum(1000, -2, 99, 50) === -2)


// Part 7

// Using logical operators, write a function that will
// return true if either input is a string, but not 
// both or neither. 

var justOneString = function (in1, in2){
	if ((typeof (in1) !== 'string') && (typeof (in2) !== 'string')){
		return false
	} else if ((typeof (in1) === 'string') && (typeof (in2) === 'string')){
		return false
	} else {
		return true
	}
}

console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString('peanut', 'butter') === false)
console.assert(justOneString(8, null) === false)


// Part 8

// Write a function called doTwice that takes as input a 
// function and invokes that function twice. 

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.

var NUMBER = 10

var incrementGlobalNumber = function() {
    NUMBER = NUMBER + 1
}

var doubleGlobalNumber = function() {
    NUMBER = NUMBER * 2
}

var doTwice = function(func){
	func();
	func();
}

doTwice(incrementGlobalNumber)
console.assert(NUMBER === 12)

doTwice(doubleGlobalNumber)
console.assert(NUMBER === 48)

// Part 9

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if 
// the value of a certain global variable, called ORACLE, is 
// "YES." Otherwise, it will does nothing.

var conditionallyInvoke = function (func){
	if (ORACLE==='YES') {
		func();
	}
}

var ORACLE = 'NO'

conditionallyInvoke(doubleGlobalNumber)
console.assert(NUMBER === 48)

var ORACLE = 'YES'
conditionallyInvoke(doubleGlobalNumber)
console.assert(NUMBER === 96)

// Part 10

// Make the following assertion work:

var machine = function(){
	return 'hello world'
}

console.assert(factory()() === 'hello world') // INCEPTION!


// Part 11

// Want more? 

console.assert(factory2()('you sly dog') === 'you sly dog')
console.assert(factory2()(999) === 999)

// Part 12

// This can't be healthy...

console.assert(factory3('i have reached function nirvana')() === 'i have reached function nirvana')
console.assert(factory3(100)() === 100)
