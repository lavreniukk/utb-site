import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import './headerstyles.css';

function Header(args) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className='styled-navbar' expand="md">
                <NavbarBrand href='/home' className='me-10'>
                    <img src='assets/logo-name.png'/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ms-3' navbar>
                        <NavItem className='me-3 styled-navlink'>
                            <NavLink href='/home'>
                                Головна
                            </NavLink>
                        </NavItem>
                        <NavItem className='me-3 styled-navlink'>
                            <NavLink>
                                Продукція
                            </NavLink>
                        </NavItem>
                        <NavItem className='me-3 styled-navlink'>
                            <NavLink>
                                Про компанію
                            </NavLink>
                        </NavItem>
                        <NavItem className='me-3 styled-navlink'>
                            <NavLink href='/contact'>
                                Контакти
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;