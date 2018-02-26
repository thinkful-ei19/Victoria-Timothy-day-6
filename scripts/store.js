/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars
const store = (function () {

  const findById = function(id) {
    console.log('findById run')
    const foundItem = store.items.find(item => items.id === id);
    console.log(foundItem, 'foundItem from store');
    return foundItem
  }

  const addItems = function(name) {
    try {
        Item.validateName(name)
        Item.create(name)
        store.items.push(name)
    }
      catch(error) {
        console.log('Cannot add item: name not valid');
    }

  // const findAndToggleChecked = function(id) {
  //   this.findById(id);
  //   foundItem.checked = !foundItem.checked;
  // }
  //
  // const findAndUpdateName = function(id, newName) {
  //   try {
  //       Item.validateName(newName)
  //       Item.findById(id)
  //       this.name = newName
  //   }
  //     catch(error) {
  //       console.log('Cannot update name: {error.message}');
  //   }
  // }
  //
  // const findAndDelete = function(id){
  //   const index = store.items.findIndex(item => items.id === id)
  //   store.items.splice(index, 1);
  // }

    const items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
    ];
    const hideCheckedItems = false;
    const searchTerm = '';

      return {
         items : items,
         hideCheckedItems : hideCheckedItems,
         searchTerm : searchTerm,
         findById : findById,
         addItems : addItems
      };
}() );
