import {useState} from "/framework";

/**
 * @param {T} initialValue the initially selected value
 * @param {Array<T>} values the Values to toggle between
 * @returns {[T ,()=>void]} the selected value and the function to toggle it
 */
export default function useToggle(initialValue, values) {
    if (values.length < 1) values = ["auto"]
    let initialIndex = values.indexOf(initialValue);
    if (initialIndex<0) initialIndex=0;
    if (initialIndex >= values.length) initialIndex=values.length-1;
    const [id, setId] = useState(initialIndex);

    function toggle() {
        setId(id+1<values.length?id+1:0);
    }

    return [values[id], toggle];
}