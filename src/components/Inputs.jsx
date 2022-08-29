import PropTypes from 'prop-types'
import React from "react";
import Row from "react-bootstrap/Row";


const Inputs = ({ name, setName, password, setPassword }) => {
    return (
        <Row className="cards">
                <div className="inp">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="inputs"
                        placeholder="Introduzca su nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br></br>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="inputs"
                        placeholder="Introduzca contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
        </Row>
    );
};

// in order to make the code more robust, we can set a type for every prop
Inputs.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.func,
    password: PropTypes.string,
    setPassword: PropTypes.func
}


export default Inputs;