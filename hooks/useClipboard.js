import {useState} from "/framework";

/**
 * 
 * @param {number} timeout The time waited before allowing the next copy
 * @returns {[boolean, (text: string)=>Promise<void>]} returns wheather or not you can't copy something in the clipboard right now, and the copy function
 */
export default function useClipboard(timeout) {
    const [copied, setCopied] = useState(false);

    function copy(txt) {
        if(copied) return;
        setCopied(true);
        setTimeout(()=>setCopied(false), timeout);
        return navigator.clipboard.writeText(txt);
    }

    return [copied, copy];
}