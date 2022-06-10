# ffhooks

FFHooks adds more hooks to featherframe.

## hooks


### useGetOS
`useGetOS()` returns a string (The OS-Name)

Typedef:
```ts
function useGetOS(): "Linux"|"Android"|"IOs"|"Windows"|"MacOS";
```

### useClipboard
`useClipboard(timeout)` returns an array, that contains if the value is copied (resets after timeout), and a function to copy text

Typedef:
```ts
function useClipboard(timeout: number): [bool, (text: string)=>Promise<void>];
```


### useId
`useId(id, genId?)` returns the id, if supplied. Otherwise it generates one using the genId function.

Typedef:
```ts
function useId(id: string|null|undefined, genId?: ()=>string): string;
```

### useLocalStorage
`useLocalStorage(initialValue, key)` stores the value in localStorage, and returns an array containing:
- The Value
- The Function to set the Value
- the Function to remove the Value
- The Function to reset the Value

Typedef:
```ts
function useLocalStorage<T>(initialValue: T, key: string): [T, (value: T)=>void, ()=>void, ()=>void];
```

### useInterval
`useInterval(func, ms)` returns an Array containing:
- The boolean wheather or not the Interval is paused
- A Function to toggle the Interval
- A Function to pause the Interval
- A Function to start the Interval

Typedef:
```ts
function useInterval(()=>void, ms: number): [boolean, ()=>void, ()=>void, ()=>void];
```

### useToggle
`useToggle(initialValue, choices)` returns an Array that contains:
- The selected Value
- The Function to select the next Value

Typedef:
```ts
function useToggle<T>(initialValue: T, choices: <any extends Array<T>>): [T/* State */, ()=>void/* toggle */];
```

### useQueue
`useQueue(initialValue, size)` returns a value, that can hold sizes amount of elements, everything over that will get into the queue.
It returns an Object containing:
- The State (.state)
- The Queue (.queue)
- A Function to add Elements (.add)
- A Function to update Elements, when supplied with a function it will call it with the state and queue merged (.update)
- A Function to remove the first Element (.removeFirst)
- A Function to clean the Queue

Typedef:
```ts
function useQueue<T>(initialValue: <any extends Array<T>>, size: number): Queue

interface Queue{state: Array<T>, queue: Array<T>, add: (T)=>void, update: (Array<T>|(values: Array<T>)=><any extends Array<T>>)=>void, removeFirst: ()=>void, cleanQueue: ()=>void}
```

### useDocTitle
`useDocTitle(title)` is used to changing the document title.

Typedef:
```ts
function useDocTitle(title: string): void;
```