let far = 77;

// TODO: calculate farToCel by subtracting 32 from far, then multiply by 5, then divide by 9
let farToCel = null;
farToCel = ((far-32)*5)/9;

// TODO: calculate celToFar by multiplying farToCel by 9, then divide by 5, then add 32
let celToFar = null;
celToFar = farToCel*9/5+32;

// the following should print "25 degrees Celsius is 77 degrees Fahrenheit"
console.log(farToCel, 'degrees Celsius is', celToFar, 'degrees Fahrenheit');