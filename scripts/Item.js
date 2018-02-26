const Item = (function(){
  function validateName(name) {
    if (name === undefiend ){
      throw new TypeError (console.log("Name does not exist."))
    }
  }

 function create(name) {
   return itemObj = {
     id : cuid(),
     name : '',
     checked : false
   }
 }
    return {
      validateName()
      create()
    };

  }());
