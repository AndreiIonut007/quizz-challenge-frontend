import React from 'react'
import { signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import Link from 'next/link';

const Header = ({props}) => {
  // const { data: session } = useSession();

  return (
    <div className="bg-transparent flex items-center justify-evenly p-2 shadow-md top-0 sticky z-50 h-16 rounded-md">
      <p>Ultimate Quiz</p>
      <Image
        className="rounded-full my-auto"
        //   src={session?.user.image}
        alt="Profile img"
        width="100"
        height="100"
      />
      <nav className='flex flex-row space-x-5 font-thin text-white text-xs antialiased tracking-widest'>
        <Link className='border-b-2 border-red-900' href={'/'}>PROFILE</Link>
        <Link className='hover:transition-all hover:border-b-2 hover:border-red-900' href={'/quiz'}>QUIZ</Link>
        <Link className='hover:transition-all hover:border-b-2 hover:border-red-900' href={'/ranting'}>RANKING</Link>
      </nav>
    </div>
  )
}

export default Header