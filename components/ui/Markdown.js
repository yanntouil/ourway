import React from 'react'
import ReactMarkdown from 'react-markdown'
import { className } from "app/helpers"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import style from 'assets/highlighter/style'
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
                    /**
                     * Bold
                     */
                    em({node, ...props}) {
                        const match = /icon-(\w+)/.exec(node.children[0].value || '')
                        return match ? (
                            <MdIcon icon={match[1]} />
                        ) : (
                            <em {...props} />
                        )
                    },
                    /**
                     * Code
                     */
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        // console.log(match[1] === js ? 'javascript' : '');
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={style}
                                language={match[1]}
                                PreTag="div"
                                className="not-prose scrollbar-thin"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                        )
                    }
                }}
            >{props.children}</ReactMarkdown>
        </div>
    )
}
