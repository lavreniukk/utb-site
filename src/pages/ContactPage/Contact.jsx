import { 
    Container, 
    Row, 
    Col, 
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
} from "reactstrap";
import './contactstyles.css';
import setMetaDescription from "../../utils/setDescription";

export default function Contact({title}) {
    document.title = 'УТБ Ресурс - ' + title;
    setMetaDescription('Компанія “УТБ Ресурс” продуктивно працює на медичному ринку України, здійснюючи постачання та ремонт медичної техніки.');
    
    return (
            <Container className="mb-5">
                <h1 className="text-center text-uppercase mt-5 mb-5">Контакти</h1>
                <Row xs="1" md="3">
                    <Col className="d-flex justify-content-center">
                        <Card className='mb-3 styled-contact-card w-100'>
                            <CardBody>
                                <div className="contact-icon d-flex justify-content-center mb-2">
                                    <i className="fa-solid fa-home"></i>
                                </div>
                                <CardTitle tag='h4' className="text-center mb-4">
                                    Адреса
                                </CardTitle>
                                <CardSubtitle tag='h5' className="mb-3">
                                    <span className="contact-span">м Київ, вул. В. Алексухіна 24, оф. 6</span>
                                </CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Card className='mb-3 styled-contact-card w-100'>
                            <CardBody>
                                <div className="contact-icon d-flex justify-content-center mb-2">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <CardTitle tag='h4' className="text-center mb-4">
                                    Електронна пошта
                                </CardTitle>
                                <CardSubtitle tag='h5' className="mb-3">
                                    <a href="mailto: info@utbresurs.com.ua" className="contact-link text-decoration-none position-relative">info@utbresurs.com.ua</a>
                                </CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Card className='mb-3 styled-contact-card w-100'>
                            <CardBody>
                                <div className="contact-icon d-flex justify-content-center mb-2">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <CardTitle tag='h4' className="text-center mb-4">
                                    Номер телефону
                                </CardTitle>
                                <CardSubtitle tag='h5' className="mb-3">
                                    <a href="tel:+380672433848" className="contact-link text-decoration-none position-relative">+38 (067) 243 38 48</a>
                                </CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
    );
}