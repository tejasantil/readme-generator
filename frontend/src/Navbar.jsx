import React , {useState} from 'react'
import {MenuIcon,XIcon} from '@heroicons/react/outline'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
    <div className='w-screen h-[80px] z-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-centre'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl underline underline-offset-8 font-mono'>GitHub Readme Generator</h1>
                <ul className='hidden md:flex text-white text-xl'>
                    <li>Home </li>
                    <li>About </li>
                    <li>Support </li>
                    <li>Templates </li>
                    
                </ul>
            </div>
            
            <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
                
            </div>
        </div>
        
        <ul className={!nav ? 'hidden ': 'absolute bg-zinc-200 w-full px-8' }>
            <li className='border-b-2 border-zinc-300 w-full'>Home </li>
            <li className='border-b-2 border-zinc-300 w-full'>About </li>
            <li className='border-b-2 border-zinc-300 w-full'>Support </li>
            <li className='border-b-2 border-zinc-300 w-full'>Templates </li>
            
            
        </ul>
    </div>
    );
}

export default Navbar