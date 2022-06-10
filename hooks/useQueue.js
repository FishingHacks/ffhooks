import { useState } from "/framework";

/**
 * @param {Array<T>} initialValue The initial Values
 * @param {number} size the maximal amount of values, the state can hold.
 * @returns {{state: Array<T>, queue: Array<T>, add: (T)=>void, update: (Array<T>|(values: Array<T>)=>Array<T>)=>void, removeFirst: ()=>void, cleanQueue: ()=>void}} returns the state, the queue. the function to add an Element, the function to update the values & queue (supplied with a function, it will execute it with the values and queue in one Array), A function to remove the first value and a function to clear the queue
 */
export default function useQueue(initialValue, size) {
  if (size <= 0) return;
  if (initialValue.length >= size)
    initialValue = initialValue.slice(0, size);
  const [values, setValues] = useState({
    values: initialValue,
    queue: initialValue.slice(size),
  });

  /**
   * Updates the items
   * @param {Array<T>|(values: Array<T>)=>Array<T>} items The Updated items or the function to update them
   */
  function update(items) {
    if (typeof items == "function")
      items = items([...values.values, ...values.queue]);
    let values = items.slice(0, size);
    let queue = items.slice(size);
    setValues({ values, queue });
  }

  /**
   * Adds a new Value
   * @param {T} newValue The new value to be inserted
   */
  function add(newValue) {
    update((items) => [...items, newValue]);
  }

  /**
   * Removes the First Value
   */
  function removeFirst() {
    let first = values.values[0];
    update((items) => items.filter((el, i) => i != 0));
  }

  /**
   * Cleans the Queue
   */
  function cleanQueue() {
    setValues({ values: [], queue: [] });
  }

  return {
    state: values.values,
    queue: values.queue,
    add,
    update,
    removeFirst,
    cleanQueue,
  };
}
