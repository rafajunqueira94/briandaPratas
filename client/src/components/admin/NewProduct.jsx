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

export default class NewProduct extends Component {
  constructor(props) {
    super(props);
    // Setting up functions

    this.state = {
      img: "",
      description: "",
      name1: "",
      name2: "",
      type: "",
      price1: 0,
      hasDiscount: 0,
      category: "",
      stockCount: 0,
    };
  }

  // When value changes of the fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      img,
      description,
      name1,
      name2,
      type,
      price1,
      hasDiscount,
      category,
      stockCount,
    } = this.state;

    Axios.post("http://localhost:4000/product/new", {
      img: img,
      description: description,
      name1: name1,
      name2: name2,
      type: type,
      price1: price1,
      hasDiscount: hasDiscount,
      category: category,
      stockCount: stockCount,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Container>
        <Styles>
          <Form onSubmit={this.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formProductCode">
                <Form.Label>CÓDIGO</Form.Label>
                <Form.Control disabled type="number" placeholder="0000" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="category">
                <Form.Label for="category">CATEGORIA</Form.Label>
                <Form.Select
                  name="category"
                  id="category"
                  aria-label="Selecione"
                  onChange={this.handleChange}
                >
                  <option>Selecione...</option>
                  <option value="1">Categ 1</option>
                  <option value="2">Categ 2</option>
                  <option value="3">Categ 3</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="name1">
                <Form.Label for="">NOME</Form.Label>
                <Form.Control
                  placeholder="Nome do Produto"
                  name="name1"
                  id="name1"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="name2">
                <Form.Label for="name2">SUBTÍTULO</Form.Label>
                <Form.Control
                  placeholder="Subtitulo do produto"
                  name="name2"
                  id="name2"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="description">
                <Form.Label for="description">DESCRIÇÃO</Form.Label>
                <Form.Control
                  placeholder="Descrição do produto"
                  name="description"
                  id="description"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="type">
                <Form.Label for="type">TIPO</Form.Label>
                <Form.Check
                  type="switch"
                  id="type-promo"
                  label="Ativar Promoção"
                  name="promo"
                  onChange={this.handleChange}
                />
                <Form.Check
                  type="switch"
                  id="type-trending"
                  label="Ativar Destaque"
                  name="trending"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="price1">
                <Form.Label for="price1">PREÇO</Form.Label>
                <NumberFormat
                  decimalSeparator=","
                  displayType="input"
                  type="text"
                  allowNegative={true}
                  decimalScale={2}
                  // prefix="R$"
                  fixedDecimalScale={false}
                  allowEmptyFormatting={true}
                  name="price1"
                  isNumericString={true}
                  id="price1"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="hasDiscount">
                <Form.Label for="hasDiscount">DESCONTO</Form.Label>
                <NumberFormat
                  decimalSeparator="."
                  displayType="input"
                  type="text"
                  allowNegative={true}
                  decimalScale={2}
                  // suffix="%"
                  isNumericString={true}
                  fixedDecimalScale={false}
                  allowEmptyFormatting={true}
                  name="hasDiscount"
                  id="hasDiscount"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="stockCount">
                <Form.Label for="stockCount">ESTOQUE</Form.Label>
                <NumberFormat
                  displayType="input"
                  type="text"
                  allowNegative={true}
                  name="stockCount"
                  id="stockCount"
                  onChange={this.handleChange}
                  isNumericString={true}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="data">
                <Form.Label for="data">IMAGEM DO PRODUTO (URL) </Form.Label>
                <Form.Control
                  placeholder="Imagem do produto"
                  name="data"
                  id="data"
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
