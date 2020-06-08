var prefix = 'xue';
function classes(componentName) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  var className = new Array();
  args.forEach(function(arg) {
    if (typeof arg === 'string') {
      className.push(
        prefix + '-' + componentName.toLowerCase() + (arg && '-' + arg),
      );
    } else if (arg instanceof Array) {
      arg.forEach(function(str) {
        return typeof str === 'string' && className.push(str);
      });
    } else if (typeof arg === 'object' && !(arg instanceof Array)) {
      for (var key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          className.push(key);
        }
      }
    }
  });
  return className
    .filter(function(v) {
      return v;
    })
    .join(' ');
}
export default classes;
