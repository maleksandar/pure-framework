import { Store } from "../core/store";

test('store: updateState function works as expected', () => {
  let store = new Store({value: 1});
  store.updateState({value: 2});
  expect(store.state.value).toBe(2);

  store.updateState({value: 1});
  expect(store.state.value).toBe(1);

});