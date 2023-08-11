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

export default function Contact(props) {
    document.title = 'УТБ Ресурс - ' + props.title; 
    return (
        <div>
            <Container className="mb-5">
                <h1 className="text-center text-uppercase mt-5 mb-5">Контакти</h1>
                <Row xs="1" md="3">
                    <Col className="d-flex justify-content-center">
                        <Card className='mb-3 styled-contact-card'>
                            <CardBody>
                                <div className="contact-icon d-flex justify-content-center mb-2">
                                    <i className="fa-solid fa-home"></i>
                                </div>
                                <CardTitle tag='h4' className="text-center mb-4">
                                    Адреса
                                </CardTitle>
                                <CardSubtitle tag='h5' className="mb-3">
                                    <span className="contact-span">вул. Авдвдав Вадвіді 16</span>
                                </CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Card className='mb-3 styled-contact-card'>
                            <CardBody>
                                <div className="contact-icon d-flex justify-content-center mb-2">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <CardTitle tag='h4' className="text-center mb-4">
                                    Електронна пошта
                                </CardTitle>
                                <CardSubtitle tag='h5' className="mb-3">
                                    <a href="mailto: email.example@gmail.com" className="contact-link">email.example@gmail.com</a>
                                </CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Card className='mb-3 styled-contact-card'>
                            <CardBody>
                                <div className="contact-icon d-flex justify-content-center mb-2">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <CardTitle tag='h4' className="text-center mb-4">
                                    Номер телефону
                                </CardTitle>
                                <CardSubtitle tag='h5' className="mb-3">
                                    <a href="tel:+380667065896" className="contact-link">+38 (066) 123 45 67</a>
                                </CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}