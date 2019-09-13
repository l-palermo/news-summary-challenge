var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error ("Assertion failed: " + assertionToCheck + " is not thruthy");
    } else {
      console.log('%cTest passed',"color:green")
    }
  }
};

function Spy(obj, method) {
  let spy = {
      args: []
  };

  let original = obj[method];
  obj[method] = function() {
      let args = [].slice.apply(arguments);
      spy.count++;
      spy.args.push(args);
      return original
  };

  return Object.freeze(spy);
}
