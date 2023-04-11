import React from "react";
import "../scss/index.scss"
import { Container, Row } from "react-bootstrap";
import { LeftComponent } from "../components/SignInSignUp/LeftComponent";
import { RightComponent } from "../components/SignInSignUp/RightComponent";

export const SignInSignUp = () => {
    return (
        <Container className="signin-signup" fluid>
            <Row>
                <LeftComponent />
                <RightComponent />
            </Row>
        </Container>
    )
}