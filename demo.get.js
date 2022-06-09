// put this into the public/pages folder after copying lfhooks into /packages

import { useState, useEffect, html, render, rerender } from "/framework"
import {useDocTitle, useGetOS, useLocalStorage, useId, useInterval, useToggle, useClipboard} from "../packages/lfhooks/hooks/index.js";

render(()=>{
const [visits, setVisits, removeVisits, clearVisits] = useLocalStorage(0, "visits")
const [counter, setCounter] = useState(0);
const [paused, toggle, pause, resume] = useInterval(()=>setCounter(counter + 1), 1000);
const [color, toggleColor] = useToggle("Blue", ["Blue", "Red", "White", "Orange"]);
const [copied, copy] = useClipboard(500);

useEffect(()=>resume(),0)

useEffect(()=>setVisits(visits+1), 0);

useEffect(()=>useDocTitle("OS: " + useGetOS() + " | Visits: " + visits.toString()))

return html`
<h1>Hello, World!</h1>
<p>You have visited this page ${visits.toString()} times!</p>

<button onclick=${clearVisits}>Clear Visits</button>

<p>You use ${useGetOS()}</p>
<p>This should be abc: ${useId("abc")}</p>
<p>Random Id: ${useId()} <a style="cursor: pointer;" onclick=${rerender}>regenerate</a></p>
<p>Counter: ${counter.toString()}</p>
<button style="background-color: ${paused?"#0f0":"#f00"}" onclick=${toggle}>${paused?"Start":"Stop"} counting</button>
<button onclick=${pause}>Stop counting</button>
<button onclick=${resume}>Start counting</button>
<br />
<button style="background-color: ${color.toLowerCase()}" onclick=${toggleColor}>${color}</button>
<br />
<button style="background-color: ${copied?"#0f0":"#00f"}" onclick=${()=>copy("Redi ist toll")}>${copied?"Copied":"Copy 'Redi ist toll'"}</button>
`
});
