var recipes = {};
var updateObjectWithKeyAndValue = function (object, key, value){
var obj = {prop: 1};
object[key] = "value";
  return updateObjectWithKeyAndValue (obj, 'prop 2', 2);
}
