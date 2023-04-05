import React from 'react'
import Tokens from './Tokens'
import Badges from './Badges'

const Portofolio = () => {
  return (
    <div className='inline-flex max-md:inline-block mx-8 mt-16'>
        <Tokens />
        <Badges />
    </div>
  )
}

export default Portofolio