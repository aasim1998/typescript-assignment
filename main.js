"use strict";
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Codevalution';
var isBeginner = true;
var total = 0;
var name = 'Aasim';
var sentence = "My name is ".concat(name, "\nI am a beginner in Typescript");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 30];
var person1 = ['Aasim', 22];
var color;
(function (color) {
    color[color["Red"] = 5] = "Red";
    color[color["Green"] = 6] = "Green";
    color[color["Blue"] = 7] = "Blue";
})(color || (color = {}));
;
var c = color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Aasim';
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable))
    console.log(myVariable.name);
myVariable.toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
var multitype;
multitype = 20;
multitype: true;
var anyType;
anyType = 20;
anyType: true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Aasim');
console.log(emp1.employeeName);
emp1.greet();
