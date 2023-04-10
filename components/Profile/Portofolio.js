import React from 'react';
import Tokens from './Tokens';
import Badges from './Badges';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../public/src/features/profileSlice';

const Portofolio = () => {
  const profile = useSelector(selectProfile);
  return (
    <div className='inline-flex max-md:inline-block mx-8 mt-16'>
        <Tokens tokens = {profile.tokens}/>
        <Badges badges = {profile.badges}/>
    </div>
  )
}

export default Portofolio