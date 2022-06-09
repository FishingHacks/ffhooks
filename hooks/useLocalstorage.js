import {KeyError, ValueError} from "./helper.js";
import {rerender} from "/framework";
/**
 * 
 * @param {T} stdval The standard value
 * @param {string} key
 * @returns {[T, (newValue: T)=>void, ()=>void, ()=>void]} the value, the function for setting it, the function for removing it and the function for resetting it. NOTE: The remove function does NOT cause a render event
 */
export default function useLocalStorage(stdval, key) {
    if(typeof key != "string") throw new KeyError("key is not a string");
    if(!('localStorage' in window)) throw new Error("LocalStorage is not supported");
    

    if(window.localStorage.getItem(key)==null) {
        window.localStorage.setItem(key, JSON.stringify(stdval));
    }

    function setValue(value) {
        window.localStorage.setItem(key, JSON.stringify(value));
        rerender();
    }

    function removeValue() {
        window.localStorage.removeItem(key);
    }

    let val = window.localStorage.getItem(key);
    if(val == null) throw new ValueError("The Value returned from localstorage shouldn't be null, but is null"); // <- should never happen

    return [JSON.parse(val), setValue, removeValue, ()=>setValue(stdval)]; // I use val so that in case something went wrong after we retrieved the value the first time, you get a valid result
}