import { Button, Navbar, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

export default function Headers() {
    const path= useLocation().pathname
    return (
        <Navbar className='border-b-2'>
            <Link to='/' className='self-center whitespace-nowrap 
            text-sm sm:text-xl font-semibol dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-br from-purple-800 to-blue-500 
            text-white rounded-lg'>Jindal's</span>
            Blog
            </Link>
            <form>
                <TextInput 
                text='type'
                placeholder='Search'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
                />
            </form>
            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch/>
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                    <FaMoon/>
                </Button>
                <Link to='/sign-in'>
                    <Button  gradientDuoTone="pinkToOrange" outline>
                        Sign In
                    </Button>
                </Link>
                <NavbarToggle/>
            </div>
                <Navbar.Collapse>
                    <Navbar.Link active={path === "/"} as={'div'}>
                        <Link to='/'>Home</Link>                        
                    </Navbar.Link>
                    <Navbar.Link active={path === "/dashboard"} as={'div'}>
                        <Link to='/dashboard'>Dashboard</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === "/projects"} as={'div'}>
                        <Link to='/projects'>Projects</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === "/about"} as={'div'}>
                        <Link to='/about'>About</Link>
                    </Navbar.Link>
                </Navbar.Collapse>
        </Navbar>
    )
}
