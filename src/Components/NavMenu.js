import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'

function NavMenu() {
    return(
        <Menu as='nav' size='massive' stackable>
            <Menu.Item>
                <NavLink exact to='/'>Home</NavLink>
            </Menu.Item>
            <Dropdown item simple text='About'>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <NavLink to='/about-us'>About Us</NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <NavLink to='/board-members'>Board Members</NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <NavLink to='/science-advisor'>Science Advisor</NavLink>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
                <NavLink to='/the-gray-whale'>The Gray Whale</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to='/trip-summaries'>Trip Summaries</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to='/contact'>Contact</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to='/donate' className='ui button primary'>Donate</NavLink>
            </Menu.Item>
        </Menu>
    )
}

export default NavMenu