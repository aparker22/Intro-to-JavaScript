// Write a function hello which given a name, says hello to the name. 

var hello = function (name) {
    return ('Hello, ' + name + '!');
};

console.log(hello('Ashley'));

// Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.

var hello2 = function(name) {
    var msg = "";
    name = name || 'world';
    msg = `Hello, ${name}!`;
    return msg;
};


console.log(hello2())

// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

var madlib = function (name, subject) {
    return `${name}'s favorite subject in school is ${subject}`;
};

console.log(madlib('Ashley', 'English'))

// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

var tipAmount = function (billAmount, serviceLevel) {
    var tip = "";
    if (serviceLevel = 'good') {
        tip = billAmount * .20;
    } else if (serviceLevel = 'fair') {
        tip = billAmount * .15;
    } else if (serviceLevel = 'bad') {
        tip = billAmount * .10;
    }
return tip;
};

console.log(tipAmount(100, 'good'));

// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

var totalBill = function (billAmount, serviceLevel) {
    return (tipAmount(billAmount, serviceLevel) + billAmount);
};

console.log(totalBill(100, 'good'));

// Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

var splitBill = function (billAmount, serviceLevel, number) {
    var total = totalBill(billAmount, serviceLevel);
    return (total / number)
};

console.log(splitBill(100, 'good', 5));