// FS is hoisting, FE is not hoisting

// Function Statement or function declaration
function a() {
    console.log('a called');
}

// Function Expression
var b = function () {
    console.log('b called');
};

a();
b();

// Anonymous Function 
// function () {}
    
// Named Function Expression
var c = function xyz() {
    console.log('c called');
};

// Parameter vs Argument
var d = function (param1, param2) { // parameters
    console.log(param1 + param2);
};
d(5, 3); // arguments

// First Class Function
var e = function (param1) {
    return function () {
        console.log('e called');
    }
};
console.log(e(3)); // passing a function as a parameter