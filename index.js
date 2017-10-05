var recipes = {};
var destructivelyUpdateObjectWithKeyAndValue = function (object, key, value){
object[key] = value;
  return object;
}
function updateObjectWithKeyAndValue(object, key, value) {
  var clone = Object.assign({}, object);
  clone[key]=value;
  return clone;
}
