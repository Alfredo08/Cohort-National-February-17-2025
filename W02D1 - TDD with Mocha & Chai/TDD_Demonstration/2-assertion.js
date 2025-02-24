const math = require('./1-math');
const assert = require('assert');

// Adding 50 and 70, expecting as a result 120. Calling the addTwoNumbers function
const result1 = math.addTwoNumbers(50, 70);
const expectedValue1 = 120;
assert.equal(result1, expectedValue1);

// Adding -20 and 15, expecting as a result -5. Calling the addTwoNumbers function
const result2 = math.addTwoNumbers(-20, 15);
const expectedValue2 = -5;
assert.equal(result2, expectedValue2);

// Adding "hello" and 5, exptecting as a result "hello5". Calling the addTwoNumbers function
const result3 = math.addTwoNumbers("hello", 5);
const expectedValue3 = "Values cannot be added because one or both of them are not numbers.";
assert.equal(result3, expectedValue3);

// Adding all numbers in the array [1,2,3,4,5,6,7,8,9,10]. Expecting as result 55;
const result4 = math.addNumbersInArray([1,2,3,4,5,6,7,8,9,10]);
const expectedValue4 = 55;
assert.equal(result4, expectedValue4);

// Adding the string "hey there. Expecting as result 'Please send an array as argument.'"
const result5 = math.addNumbersInArray("hey there");
const expectedValue5 = "Please send an array as argument.";
assert.equal(result5, expectedValue5);