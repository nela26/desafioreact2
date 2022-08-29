import React from "react";
import Btn from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Button = ({validate}) => {
    
    return (
        <Row>
            <Col className="text-center">
                <Btn variant="warning" className="mt-1" onClick={validate}>
                    Verificar
                </Btn>
            </Col>
        </Row>
    );
};
export default Button

