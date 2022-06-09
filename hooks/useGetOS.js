/**
 * @returns {"Linux"|"Android"|"IOs"|"Windows"|"MacOS"} the Operating system they're using
 */
export default function useGetOS() {
    let userAgent = window.navigator.userAgent;
    return /Linux/i.test(userAgent)?'Linux':/Android/i.test(userAgent)?'Android':/(iPhone)|(iPod)|(iPAd)/.test(userAgent)?'IOs':/(Windows)|(Win32)|(Win64)/.test(userAgent)?'Windows':'MacOS';
}