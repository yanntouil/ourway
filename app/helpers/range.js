

/**
 * Range
 * @param {Number} from
 * @param {Number} to
 * @param {Number} [step=1]
 * @return {Array.<Number>} 
 */
const range = (from, to, step = 1) => {
    let i = from
    const range = []
    while (i <= to) {
        range.push(i)
        i += step
    }
    return range
}
export default range