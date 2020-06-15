import { add, complete, move, remove } from './actions';

test('Action function `add`', () => {
  const action = add('foo');
  expect(JSON.stringify(action)).toEqual('{"type":"list/ADD","payload":{"text":"foo"}}');
});

test('Action function `complete`', () => {
  const action = complete(1);
  expect(JSON.stringify(action)).toEqual('{"type":"list/COMPLETE","payload":{"index":1}}');
});

test('Action function `move`', () => {
  const action = move(1, 7);
  expect(JSON.stringify(action)).toEqual('{"type":"list/MOVE","payload":{"index":1,"target":7}}');
});

test('Action function `remove`', () => {
  const action = remove(1);
  expect(JSON.stringify(action)).toEqual('{"type":"list/REMOVE","payload":{"index":1}}');
});


