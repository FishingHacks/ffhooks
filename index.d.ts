/**
 * @param stdval the standard value
 * @param key the storagekey
 * @returns the value, the function to set it, the function to remove it from localStorage and the function to reset it
 */
declare function useLocalStorage<T>(stdval: T, key: string): [T, (value: T)=>void, ()=>void, ()=>void];

/**
 * @returns the Operating System the user is using
 */
declare function useGetOS(): "Linux"|"Android"|"IOs"|"Windows"|"MacOS";

/**
 * @param title The Website Title
 */
declare function useDocTitle(title: string): void;

/**
 * @param id An ID (string) or undefined
 * @param getIdFunc The function used to generate a new id
 * @returns when the Id is undefined or not a string, it will generate a new one. Otherwise it will return the id
 */
declare function useId(id: string|any, getIdFunc?: ()=>string): string;

/**
 * @param func the function that gets executed
 * @param ms the interval in milliseconds between each call
 * @returns an array containing if the execution is paused, a function to toggle the execution, start and stop it.
 */
declare function useInterval(func: ()=>void, ms: number): [boolean, ()=>void, ()=>void, ()=>void];

/**
 * @param initialValue The initial Value. When not in the values array, the first value from the array is selected
 * @param values The values. When empty it will be replaced with ["auto"].
 * @returns The selected value and a function to go to the next value
 */
declare function useToggle<T>(initialValue: T, values: Array<T>): [T, ()=>void];

/**
 * @param timeout the time in ms before being able to copy the next value
 * @returns if the timeout is active and the function to copy a string to the Clipboard
 */
declare function useClipboard(timeout: number): [boolean, (txt)=>Promise<void>];

/**
 * @param initialValue The initial Array. Gets automatically sliced
 * @param size the size of the state. When the state is full, values get put into the queue. Perform Array Changes only using the functions, as otherwise the state wouldn't fill up
 * @returns state - the state, queue - the queue, add - Add an item, update - Supply an array or a function that get's the current values of state and array and returns a new Array. Useful for things like sorting, removeFirst - Removes the first element, cleanQueue - resets the state and queue
 */
declare function useQueue<T>(initialValue: Array<T>, size: number): {
    state: Array<T>,
    queue: Array<T>,
    add: (T)=>void,
    update: (items: Array<T>|((values: Array<T>)=>Array<T>))=>void,
    removeFirst: ()=>void,
    cleanQueue: ()=>void
}

export {
    useClipboard,
    useDocTitle,
    useGetOS,
    useId,
    useInterval,
    useLocalStorage,
    useQueue,
    useToggle,
}