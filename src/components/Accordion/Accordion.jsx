import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import './accordion.css';

function Accordion({header, body}) {
    const [accordionOpen, setAccordionOpen] = useState(false);

    const handleToggle = () => {
        setAccordionOpen(!accordionOpen);
    }

    return (
        <Card className='accordion__container'>
            <CardHeader className='accordion__header d-flex' onClick={handleToggle}>{header}<i className={accordionOpen ? 'fa-solid fa-chevron-down accordion__arrow arrow_clicked' : 'fa-solid fa-chevron-down accordion__arrow'}></i></CardHeader>
            <Collapse isOpen={accordionOpen}>
            <CardBody className='d-flex flex-column accordion__body'>
                {body}
            </CardBody>
            </Collapse>
        </Card>
    )
}

export default Accordion