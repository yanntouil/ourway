




/**
 * className : Use class like Vue JS
 * String : 'class1 class2 ...'
 * Array of string : ['class1 class2', 'class3', ...]
 * Conditional object : { 'class1': true, ... }
 * Array mix : ['class1 class2', 'class3', { 'class3': true, ... }, ...]
 * @param {Array|Object|String} classes
 * @return {String} 
 */
export default function className(classes) {
    if (Array.isArray(classes)) {
        const list = []
        classes.forEach((classGroup) => {
            if (typeof classGroup === 'object') list.push(classesFromObject(classGroup))
            else if (typeof classGroup === 'string') list.push(classGroup)
            else console.error('unrecognized class expression', classGroup)
        })
        return list.join(" ")
    } else if (typeof classes === 'object') {
        return classesFromObject(classes)
    } else if (typeof classes === 'string') {
        return classes
    } else console.error('unrecognized class expression', classes)
}

const classesFromObject = (classes) => Object.entries(classes)
    .filter((entry) => entry[1])
    .map((entry) => entry[0])
    .join(" ")