import { Todo, ListState } from '../../models/list';
import { 
  addItem,
  completeItem,
  initialState, 
  listReducer,
  moveItem,
  removeItem,
} from './index';

const store = {
  list: [
    { text: 'foo', complete: false},
    { text: 'bar', complete: false},
    { text: 'baz', complete: true},
  ],
};

const testMessages = {
  ADD: { type: 'list/ADD', payload: {text: 'test'}},
  COMPLETE: { type: 'list/COMPLETE', payload: { index: 1}},
  MOVE: { type: 'list/MOVE', payload: { index: 0, target: 1 }},
  REMOVE: { type: 'list/REMOVE', payload: { index: 2}},
};

const testOutput = {
  addItem: '[{"text":"test","complete":false},{"text":"foo","complete":false},{"text":"bar","complete":false},{"text":"baz","complete":true}]',
  completeItem: '[{"text":"test","complete":false},{"text":"bar","complete":false},{"text":"baz","complete":true},{"text":"foo","complete":true}]',
  moveItem: '[{"text":"bar","complete":false},{"text":"test","complete":false},{"text":"baz","complete":true}]',
  removeItem: '[{"text":"bar","complete":false},{"text":"test","complete":false}]',
  addReduction: '{"list":[{"text":"test","complete":false},{"text":"bar","complete":false},{"text":"test","complete":false}]}',
  completeReduction: '{"list":[{"text":"bar","complete":false},{"text":"test","complete":true}]}',
  moveReduction: '{"list":[{"text":"test","complete":true},{"text":"bar","complete":false}]}',
  removeReduction: '{"list":[{"text":"bar","complete":false},{"text":"test","complete":true}]}',
};

test('Reducer function `addItem`', () => {
  const newList = addItem(store.list, 'test');
  expect(JSON.stringify(newList)).toEqual(testOutput.addItem);
});

test('Reducer function `completeItem`', () => {
  const newList = completeItem(store.list as Todo[], 1);
  expect(JSON.stringify(newList)).toEqual(testOutput.completeItem);
});

test('Reducer function `moveItem`', () => {
  const newList = moveItem(store.list, 0, 1);
  expect(JSON.stringify(newList)).toEqual(testOutput.moveItem);
});

test('Reducer function `removeItem`', () => {
  const newList = removeItem(store.list, 2);
  expect(JSON.stringify(newList)).toEqual(testOutput.removeItem);
});

test('Reducer with miss', () => {
  const newStore = listReducer({...store} as ListState, { type: 'foo' } as any);
  expect(JSON.stringify(newStore)).toEqual(JSON.stringify(store));
});

test('Reducer with `list/ADD', () => {
  const newStore = listReducer({...store} as ListState, testMessages.ADD as any);
  expect(JSON.stringify(newStore)).toEqual(testOutput.addReduction);
});

test('Reducer with `list/COMPLETE', () => {
  const newStore = listReducer({...store} as ListState, testMessages.COMPLETE as any);
  expect(JSON.stringify(newStore)).toEqual(testOutput.completeReduction);
});

test('Reducer with `list/MOVE', () => {
  const newStore = listReducer({...store} as ListState, testMessages.MOVE as any);
  expect(JSON.stringify(newStore)).toEqual(testOutput.moveReduction);
});

test('Reducer with `list/REMOVE', () => {
  const newStore = listReducer({...store} as ListState, testMessages.REMOVE as any);
  expect(JSON.stringify(newStore)).toEqual(testOutput.removeReduction);
});

