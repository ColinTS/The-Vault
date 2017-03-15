'use strict';
module.exports = function() {

  //PRIVATE
  var myVault = {};

  //PUBLIC
  function setValue(key, value){
    myVault[key] = value;
  }

 function getValue(key){
    if(myVault[key]){
      return myVault[key];
    }
    else{
      return null;
    }
  }
  return{
    getValue,
    setValue
  };
};