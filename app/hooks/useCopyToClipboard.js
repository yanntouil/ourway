



/**
 * useCopyToClipboard
 * ? Usage : const [value, copy] = useCopyToClipboard()
 * ?         ...onClick={() => copy('hello world')...
 * ?         ...{value ?? 'Nothing is copied yet!'}...
 * @returns {Array} [copiedText, copy]
 */
export default function useCopyToClipboard() {
    const [copiedText, setCopiedText] = useState(null)
  
    const copy = async text => {
        if (!navigator?.clipboard) {
            console.warn('Clipboard not supported')
            return false
        }
        try { // Try to save to clipboard then save it in the state if worked
            await navigator.clipboard.writeText(text)
            setCopiedText(text)
            return true
        } catch (error) {
            console.warn('Copy failed', error)
            setCopiedText(null)
            return false
        }
    }
    return [copiedText, copy]
}