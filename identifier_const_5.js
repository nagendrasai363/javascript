const pi = 3.14;
console.log("The value of pi is " + pi);

/* This will throw an error because the assignment
to a const needs to be done at the time of declaration
and it cannot be re-initialized. */
pi = 3.141592;
console.log("The value of pi is " + pi);
