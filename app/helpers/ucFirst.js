







/**
 * Uppercase First Letter
 *
 */
export default function ucFirst([ first, ...rest ]) {
    return first.toLocaleUpperCase() + rest.join('')
}