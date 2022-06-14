import React, { Component } from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

const Styles = styled.div`
  margin-bottom: 2.5vw;
  border-top: solid 2px pink;
  border-bottom: solid 2px pink;
  padding: 15px;
`;

export default class NewUser extends Component {
  constructor(props) {
    super(props);
    // Setting up functions

    this.state = {
      login: "",
      name: "",
      gender: "",
      email: "",
      phone: "",
      password: "",
      registered: new Date().toLocaleDateString(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // When value changes of the fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { login, name, gender, email, phone, password, registered } =
      this.state;

    Axios.post("http://localhost:4000/user/new", {
      login: login,
      name: name,
      gender: gender,
      email: email,
      phone: phone,
      password: password,
      registered: registered,
    })
      .then((response) => {
        console.log(response);
        alert("Usuário cadastrado com sucesso")
      })
      .catch((error) => {
        alert("Erro no cadastrado do usuário. Contate o Administrador.")
        console.log(error);
      });
  };

  render() {
    return (
      <Container>
        <Styles>
          <Form onSubmit={this.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="name">
                <Form.Label for="">NOME DO USUÁRIO</Form.Label>
                <Form.Control
                  placeholder="Nome do Usuário"
                  name="name"
                  id="name"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3">
                <Form.Label>SEXO</Form.Label>
                <Form.Select
                  name="gender"
                  componentClass="select"
                  placeholder="Selecione..."
                  onChange={this.handleChange}
                >
                  <option value="none">-</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Outro">Outro</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label for="email">E-MAIL</Form.Label>
                <Form.Control
                  placeholder="E-mail do usuário"
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>TELEFONE</Form.Label>
                <Form.Control
                  mask="(99) 99999-9999"
                  placeholder="(00) 00000-0000"
                  name="phone"
                  id="phone"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="login">
                <Form.Label for="">LOGIN</Form.Label>
                <Form.Control
                  placeholder="Login"
                  name="login"
                  id="login"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="password">
                <Form.Label for="password">SENHA</Form.Label>
                <Form.Control
                  placeholder="*****"
                  name="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit" value="submit">
              Submit
            </Button>
          </Form>
        </Styles>
      </Container>
    );
  }
}
