import React from 'react'
import ReactMarkdown from 'react-markdown'
import { className } from "app/helpers"
import MdIcon from './MdIcon'

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
            <ReactMarkdown
                components={{
                    em({node, ...props}) {
                        const match = /icon-(\w+)/.exec(node.children[0].value || '')
                        return match ? (
                            <MdIcon icon={match[1]} />
                        ) : (
                            <em {...props} />
                        )
                    }
                }}
            >{props.children}</ReactMarkdown>
        </div>
    )
}
