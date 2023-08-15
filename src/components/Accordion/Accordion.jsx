import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';

function Accordion({header, body}) {
    const [accordionOpen, setAccordionOpen] = useState(false);

    const handleToggle = () => {
        setAccordionOpen(!accordionOpen);
    }

    return (
        <Card>
            <CardHeader onClick={handleToggle}>{header}</CardHeader>
            <Collapse isOpen={accordionOpen}>
            <CardBody className='d-flex flex-column'>
                {body}
            </CardBody>
            </Collapse>
        </Card>
    )
}

export default Accordion