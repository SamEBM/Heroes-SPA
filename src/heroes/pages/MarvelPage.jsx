import React from 'react'
import { HeroList } from '../components'

export const MarvelPage = () => {
    return (
        <>
            <h1 className='text-center mt-2'>Marvel Heroes</h1>
            <hr />

            <HeroList publisher={'Marvel Comics'}/>
        </>
    )
}
