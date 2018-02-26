const Item = (function(){
    return {
      validateName : validateName,
      create : create
    };

  }());

  function validateName(name) {
    if (name === '' ){
      throw new TypeError (console.log("Name does not exist."))
    }
  }

  function create(name) {

   return itemObj = {
     id : cuid(),
     name : name,
     checked : false
   }
  }
