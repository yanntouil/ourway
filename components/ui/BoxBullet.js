import { className } from "app/helpers";




/**
 * BoxBullet
 * @param {Object} props
 */
export function BoxBullet(props) {
    const cleanProps = { ...props };
    if (props.className) delete (cleanProps.className);
    return (
        <article {...cleanProps} className={className([
            'flex gap-8',
            props.className ?? '',
        ])} />
    )
}

/**
 * BoxBulletBody
 * @param {Object} props
 */
export function BoxBulletBody(props) {
    const cleanProps = { ...props }
    if (props.className) delete (cleanProps.className)
    return (
        <div {...cleanProps} className={className([
            'grow',
            props.className ?? '',
        ])} />
    )
}

/**
 * BoxBulletIcon
 * @param {Object} props
 */
export function BoxBulletIcon(props) {
    const cleanProps = { ...props }
    if (props.className) delete (cleanProps.className)
    return (
        <div {...cleanProps} className={className([
            'shrink-0',
            props.className ?? '',
        ])} />
    )
}

/**
 * BoxBulletTitle
 * @param {Object} props
 */
export function BoxBulletTitle(props) {
    const cleanProps = { ...props }
    if (props.className) delete (cleanProps.className)
    return (
        <h3 {...cleanProps} className={className([
            'text-2xl font-semibold',
            props.className ?? '',
        ])} />
    )
}

/**
 * BoxBulletContent
 * @param {Object} props
 */
export function BoxBulletContent(props) {
    const cleanProps = { ...props }
    if (props.className) delete (cleanProps.className)
    return (
        <p {...cleanProps} className={className([
            '',
            props.className ?? '',
        ])} />
    )
}
