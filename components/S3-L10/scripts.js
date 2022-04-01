let test = function (val) {
  console.log(this);
  console.log(val);
  console.log(arguments);

  console.log(arguments[1]);
};

// Call test(); without anything
//You will see there cl(this) will return window object and cl(arguments will return an array)
//If you will console.log(1,2,3,4) look what happens. cl(this) will remain window object, cl(val) will be 3 and cl(arguments) will pe the array of [1,2,3,4]
