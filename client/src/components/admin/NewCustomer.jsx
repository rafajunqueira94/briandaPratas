import React, { Component } from "react";
import { useForm } from "react-hook-form";
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

export default class NewCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: 1,
      picture: "",
      name: "",
      gender: "",
      birthDate: "",
      email: "",
      phone: "",
      cep: "",
      address: "",
      registered: new Date().toLocaleDateString(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    console.log(`${event.target.name} = ${event.target.value}`);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      isActive,
      picture,
      name,
      gender,
      birthDate,
      email,
      phone,
      cep,
      address,
      registered,
    } = this.state;

    Axios.post("http://localhost:4000/customer/new", {
      isActive: isActive,
      picture: picture,
      name: name,
      gender: gender,
      birthDate: birthDate,
      email: email,
      phone: phone,
      cep: cep,
      address: address,
      registered: registered,
    })
      .then((response) => {
        alert("Cliente cadastrado com sucesso");
        console.log(response);
      })
      .catch((error) => {
        alert("Erro no cadastrado do cliente. Contate o Administrador.");
        console.log(error);
      });
  };

  render() {
    return (
      <Container>
        <Styles>
          <Form onSubmit={this.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Ativar Cadastro</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="isActive"
                  id="isActive"
                  defaultValue={true}
                  checked={this.state.isActive}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>NOME DO CLIENTE</Form.Label>
                <Form.Control
                  placeholder="Nome do Cliente"
                  name="name"
                  id="name"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>DATA DE NASCIMENTO</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="dd/mm/aaaa"
                  name="birthDate"
                  id="birthDate"
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
              <Form.Group className="mb-3">
                <Form.Label>E-MAIL</Form.Label>
                <Form.Control
                  placeholder="exemplo@email.com"
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
              <Form.Group className="mb-3">
                <Form.Label>CEP</Form.Label>
                <Form.Control
                  placeholder="00.000-000"
                  name="cep"
                  id="cep"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>ENDEREÇO</Form.Label>
                <Form.Control
                  placeholder=""
                  name="address"
                  id="address"
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
