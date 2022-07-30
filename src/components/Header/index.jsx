import React from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row} from 'reactstrap'
import { NavLink } from 'react-router-dom';
import './style.scss';
Header.propTypes = {
    
};

function Header(props) {
    return (
        <header className="header">
            <Container>
                <Row className   = "justify-content-between">
                    <Col xs= "auto">
                        <a
                            className = "header__link header__title"
                            href = "https://github.com/Toan2211"
                            target="_blank"
                            rel = "noopener noreferrer"
                        >
                            My Github
                        </a>
                    </Col>
                    <Col xs= "auto">
                        <NavLink
                            exact = "true"
                            className= "header__link"
                            to = "/photos"
                            activeclassname = "header__link--active"

                        >
                        Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;