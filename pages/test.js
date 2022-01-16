import React from 'react'
import Main from 'components/layout/Main'
import Section from 'components/ui/Section';

export default function test() {


// const result = 
let string = 'ma chaine'
const [ first, ...rest ] = string
string = first.toLocaleUpperCase() + rest.join('')
    console.log(string)

    return (
        <Main>
            <Section></Section>
        </Main>
    )
}
