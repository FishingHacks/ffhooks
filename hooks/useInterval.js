import {useState, useRef} from "/framework";

/**
 * 
 * @param {()=>void} func The function to run
 * @param {number} ms The time to wait between each function in millisenconds
 * @returns {[boolean, ()=>void, ()=>void, ()=>void]} return an array containing: The boolean stating if the interval is paused, the function to toggle the pause state, the function to pause it and the function to resume it
 */
export default function useInterval(func, ms) {
    let id = useRef(0);
    let [paused, setPaused] = useState(true);

    if(!paused) {
        clearInterval(id.current);
        id.current = setInterval(func, ms);
    }

    function start() {
        if(!paused) return;
        id.current = setInterval(func, ms);
        setPaused(false);
    }

    function pause() {
        if(paused) return;
        clearInterval(id.current);
        setPaused(true);
    }

    function toggle() {
        paused?start():pause();
    }

    return [paused, toggle, pause, start];
}