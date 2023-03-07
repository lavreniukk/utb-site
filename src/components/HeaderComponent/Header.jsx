import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Input,
    Row,
    Col,
    Container,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './headerstyles.css';

const setActiveLink = ({isActive}) => isActive ? 'styled-navlink styled-navlink-active' : 'styled-navlink styled-navlink-inactive';

function Header() {
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleNav = () => setIsOpenNav(!isOpenNav);
    const toggleMenu = () => {

        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <Navbar className='styled-navbar' expand="md">
        <Container>
            <Row>
            <Col>
            <NavbarBrand href='/' className='d-flex'>
                <img src='assets/utb-logo-1.png'/>
            </NavbarBrand>
            </Col>
            <Col>
            <NavbarBrand href='/' className='d-flex'>
                <img src='assets/utb-logo-2.png' className='ms-auto'/>
            </NavbarBrand>
            </Col>
            </Row>

            <Row className='mt-3 d-flex justify-content-between' xs="2" md="2">
            <Col className='ps-4' md="3">
                <Dropdown className='d-md-flex justify-content-start' isOpen={isOpenMenu} toggle={toggleMenu}>
                <DropdownToggle className='dropdown-btn' style={{borderRadius: isOpenMenu ? '5px 5px 0 0' : '5px'}}>
                    Каталог
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={function noRefCheck(){}}>
                        Категорія 1
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck(){}}>
                        Категорія 2
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck(){}}>
                        Категорія 3
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck(){}}>
                        Категорія 4
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck(){}}>
                        Категорія 5
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck(){}}>
                        Категорія 6
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck(){}}>
                        Категорія 7
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck(){}}>
                        Категорія 8
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck(){}}>
                        Категорія 9
                    </DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </Col>

            <Col className='d-md-none d-flex justify-content-end mb-3'> 
                <NavbarToggler className='styled-navbtn' onClick={toggleNav}/>
            </Col>

            <Col md="9">
            <Collapse className='d-md-flex justify-content-end' isOpen={isOpenNav} navbar>
            <Nav className='ms-3' navbar>
                <NavItem className='me-3 mb-3'>
                    <NavLink to="/" className={setActiveLink}>
                        Головна
                    </NavLink>
                </NavItem>
                <NavItem className='me-3 mb-3'>
                    <NavLink to="/product" className={setActiveLink}>
                        Продукція
                    </NavLink>
                </NavItem>
                <NavItem className='me-3 mb-3'>
                    <NavLink to="/aboutus" className={setActiveLink}>
                        Про компанію
                    </NavLink>
                </NavItem>
                <NavItem className='me-3 mb-3'> 
                    <NavLink to='/contact' className={setActiveLink}>
                        Контакти
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse> 
            </Col>
            </Row>
        </Container>
        </Navbar>
    );
};

export default Header;