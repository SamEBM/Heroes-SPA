import React from 'react'
import { HeroList } from '../components'

export const DCPage = () => {
    return (
        <>
            <h1 className='text-center mt-2'>DC Heroes</h1>
            <hr />
            <HeroList publisher={'DC Comics'}/>
        </>
    )
}
