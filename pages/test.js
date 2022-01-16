import React from 'react'
import Main from 'components/layout/Main'
import Section from 'components/ui/Section';

export default function test() {


    // const result = 
    if (typeof window !== "undefined") {
        let NodeList = document.querySelectorAll('p')
        const elements =  Array.from(NodeList).map((el) => el)
        console.log(elements)
    }
    return (
        <Main>
            <Section></Section>
        </Main>
    )
}
