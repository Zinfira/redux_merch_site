import itemListReducer from '../reducers/item-list-reducer';

describe('itemListReducer', () => {

  let action;
  const itemData = {
    name: 'chocolate',
    description: 'sweet desert',
    quantity: 5,
    id: 1
  }

  const currentState = {
    1: {name: 'chocolate',
    description: 'sweet desert',
    quantity: 5,
    id: 1 },
    2: {name: 'yogurt',
    description: 'milk produce',
    quantity: 2,
    id: 2 }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(itemListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new item data to masterItemList', () => {
    const { name, description, quantity, id } = itemData;
    action = {
      type: 'ADD_ITEM',
      name: name,
      description: description,
      quantity: quantity,
      id: id
    };

    expect(itemListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete an item', () => {
    action = {
      type: 'DELETE_ITEM',
      id: 1
    };
    expect(itemListReducer(currentState, action)).toEqual({
      2: {name: 'yogurt',
    description: 'milk produce',
    quantity: 2,
    id: 2 }
    });
  });
});