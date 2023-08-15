import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
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
                <img src='/assets/images/utb/utb-logo-1.png' alt='УТБ Ресурс'/>
            </NavbarBrand>
            </Col>
            <Col>
            <NavbarBrand href='/' className='d-flex'>
                <img src='/assets/images/utb/utb-logo-2.png' className='ms-auto' alt='Медичні технології заради життя'/>
            </NavbarBrand>
            </Col>
            </Row>

            <Row className='mt-3 d-flex justify-content-between' xs="2" md="2">
            <Col className='ps-4' xs="7" sm="5" md="3">
                <Dropdown className='d-md-flex justify-content-start' isOpen={isOpenMenu} toggle={toggleMenu}>
                <DropdownToggle className='dropdown-btn' style={{borderRadius: isOpenMenu ? '5px 5px 0 0' : '5px'}}>
                    Каталог
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        Категорія 1
                    </DropdownItem>
                    <DropdownItem>
                        Категорія 2
                    </DropdownItem>
                    <DropdownItem>
                        Категорія 3
                    </DropdownItem>
                    <DropdownItem>
                        Категорія 4
                    </DropdownItem>
                    <DropdownItem>
                        Категорія 5
                    </DropdownItem>
                    <DropdownItem>
                        Категорія 6
                    </DropdownItem>
                    <DropdownItem>
                        Категорія 7
                    </DropdownItem>
                    <DropdownItem>
                        Категорія 8
                    </DropdownItem>
                    <DropdownItem>
                        Категорія 9
                    </DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </Col>

            <Col xs="5" className='d-md-none d-flex justify-content-end mb-3'> 
                <NavbarToggler className='styled-navbtn' onClick={toggleNav}/>
            </Col>

            <Col xs="12" md="9">
            <Collapse className='d-md-flex justify-content-end' isOpen={isOpenNav} navbar>
            <Nav className='ms-3' navbar>
                <NavItem className='me-3 mb-3'>
                    <NavLink to="/" className={setActiveLink}>
                        Головна
                    </NavLink>
                </NavItem>
                <NavItem className='me-3 mb-3'>
                    <NavLink to="/products" className={setActiveLink}>
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