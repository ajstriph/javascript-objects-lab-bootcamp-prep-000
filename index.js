var recipes = {};
var updateObjectWithKeyAndValue = function (object, key, value){
var obj = {prop: 1};
object['prop 2'] = 2;
  return updateObjectWithKeyAndValue;
}
var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  var obj = {prop: 1, prop2:2};
  obj['prop 2']=2;
  return object;
}
