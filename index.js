var recipes = {};
var updateObjectWithKeyAndValue = function (object, key, value){
object[key] = value;
  return object;
}
function updateObjectWithKeyAndValue(object, key, value) {
  var clone = Object.assign({}, {'prop 2': 2});
  return clone;
}