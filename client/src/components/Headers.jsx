import { Button, Navbar, NavbarToggle, TextInput, Dropdown, Avatar } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon, FaSun} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import {toggleTheme} from '../redux/theme/themeSlice'

export default function Headers() {
    const path= useLocation().pathname
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.user)
    const {theme} = useSelector(state => state.theme)
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
                <Button className='w-12 h-10 hidden sm:inline' color='gray' pill 
                onClick={()=> dispatch(toggleTheme())}>
                {theme === 'light' ? <FaSun/> : <FaMoon/>} 
                </Button>
                {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }> 
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item >Sign out</Dropdown.Item>
            </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}
                <NavbarToggle/>
            </div>
                <Navbar.Collapse>
                    <Navbar.Link active={path === '/'} as={'div'}>
                        <Link to='/'>Home</Link>                        
                    </Navbar.Link>
                    <Navbar.Link active={path === '/dashboard'} as={'div'}>
                        <Link to='/dashboard'>Dashboard</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/projects'} as={'div'}>
                        <Link to='/projects'>Projects</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/about'} as={'div'}>
                        <Link to='/about'>About</Link>
                    </Navbar.Link>
                </Navbar.Collapse>
        </Navbar>
    )
}
