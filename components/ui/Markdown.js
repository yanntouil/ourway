import React from 'react'
import ReactMarkdown from 'react-markdown'
import { className } from "app/helpers"

export default function Markdown(props) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    if (props.children) delete(cleanProps.children)
    if (props.noProse) delete(cleanProps.noProse)
    return (
        <div {...cleanProps} className={className([
            props.noProse ? '' : 'prose max-w-full prose-neutral dark:prose-invert',
            props.className ?? '',
        ])}>
            <ReactMarkdown>{props.children}</ReactMarkdown>
        </div>
    )
}
