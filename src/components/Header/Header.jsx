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
import { Link, NavLink } from 'react-router-dom';
import './headerstyles.css';
import categories from '../../constants/productCategories';
import Accordion from '../Accordion/Accordion';
import categoriesNames from '../../constants/categoriesNames';

const setActiveLink = ({isActive}) => isActive ? 'styled-navlink styled-navlink-active' : 'styled-navlink styled-navlink-inactive';

function Header() {
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleNav = () => setIsOpenNav(!isOpenNav);
    const toggleMenu = () => setIsOpenMenu(!isOpenMenu);

    return (
        <Navbar className='styled-navbar' expand="md">
        <Container>
            <Row>
            <Col>
            <NavbarBrand href='/' className='d-flex'>
                <img src='/assets/images/utb/utb-logo-1.png' alt='УТБ Ресурс' loading='lazy'/>
            </NavbarBrand>
            </Col>
            <Col>
            <NavbarBrand href='/' className='d-flex'>
                <img src='/assets/images/utb/utb-logo-2.png' className='ms-auto' alt='Медичні технології заради життя' loading='lazy'/>
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
                    {
                        categories.map((category, index) => (
                            'secondaryCategory' in category ? 
                               <Accordion
                                header={
                                        <Link to={`/products/category/${category.mainCategory}`} className='product-filter__link'>
                                            {categoriesNames.get(category.mainCategory)}
                                        </Link>
                                } 
                                body={
                                    category.secondaryCategory.map((secondary, index) => (
                                    <Link to={`/products/category/${category.mainCategory}/${secondary}`} key={index} className='product-filter__link'>
                                        <DropdownItem>
                                            {categoriesNames.get(secondary)}
                                        </DropdownItem>
                                    </Link>
                                ))}
                                key={index}
                            />  
                            :
                            <Link to={`/products/category/${category.mainCategory}`} key={index} className='product-filter__link'>
                                <DropdownItem>
                                    {categoriesNames.get(category.mainCategory)}
                                </DropdownItem>
                            </Link>
                        ))
                    }
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