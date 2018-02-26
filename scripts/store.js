/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars
const store = (function () {

  const findById = function(id) {
    console.log('findById run')
    const foundItem = store.items.find(items => items.id === id);
    console.log(foundItem, 'foundItem from store');
    return foundItem
  };

  const addItems = function(name) {
    console.log('addItems run')
    try {
        Item.validateName(name)
        const created = Item.create(name)
        store.items.push(created)
    }
      catch(error) {
        console.log('Cannot add item: name not valid');
    }
  };

  const findAndToggleChecked = function(id) {
    const foundItem = this.findById(id)
    foundItem.checked = !foundItem.checked;
  };

  const findAndUpdateName = function(id, newName) {
    try {
        Item.validateName(newName)
        const foundItem = this.findById(id)
        foundItem.name = newName
    }
      catch(error) {
        console.log('Cannot update name: {error.message}');
    }
  };

  const findAndDelete = function(id){
    const index = store.items.findIndex(items => items.id === id)
    console.log(index, 'index of deleted item')
    console.log(store.items)
    store.items.splice(index, 1);
  }

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
         addItems : addItems,
         findAndToggleChecked : findAndToggleChecked,
         findAndUpdateName : findAndUpdateName,
         findAndDelete : findAndDelete
      };
}() );
