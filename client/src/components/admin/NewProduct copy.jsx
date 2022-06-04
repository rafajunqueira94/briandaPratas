import React, { Component } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencyInput from "react-currency-input-field";
import { useState, useEffect } from "react";
import Axios from "axios";

const Styles = styled.div`
  margin-bottom: 2.5vw;
  border-top: solid 2px pink;
  border-bottom: solid 2px pink;
  padding: 15px;

  #formProductCode {
    width: 5vw;
  }

  #formProductName,
  #formProductCategory {
    width: 20vw;
  }
`;
export default class NewProduct extends Component {
  constructor(props) {
    super(props);
    // Setting up functions
    this.onChangeProductDescription =
      this.onChangeProductDescription.bind(this);
    this.onChangeProductName1 = this.onChangeProductName1.bind(this);
    this.onChangeProductName2 = this.onChangeProductName2.bind(this);
    this.onChangeProductPrice1 = this.onChangeProductPrice1.bind(this);
    this.onChangeProductHasDiscount =
      this.onChangeProductHasDiscount.bind(this);
    this.onChangeProductStockCount = this.onChangeProductStockCount.bind(this);
    this.onChangeProductRatingCount =
      this.onChangeProductRatingCount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      description: "",
      name1: "",
      name2: "",
      type: "",
      price1: 0,
      rating: 0,
      hasDiscount: 0,
      category: "",
      stockCount: "",
    };
  }

  onChangeProductDescription(e) {
    console.log(`descrição: ${e.target.value}`);
    this.setState({ description: e.target.value });
  }

  onChangeProductName1(e) {
    console.log(`name1: ${e.target.value}`);
    this.setState({ name1: e.target.value });
  }

  onChangeProductName2(e) {
    console.log(`name2: ${e.target.value}`);
    this.setState({ name2: e.target.value });
  }

  // onChangeProductType(e) {
  //   console.log(`type: ${e.target.value}`);
  //   this.setState({ type: e.target.value });
  // }

  onChangeProductPrice1(e) {
    console.log(`price1: ${e.target.value}`);
    this.setState({ price1: e.target.value });
  }

  onChangeProductHasDiscount(e) {
    console.log(`hasDiscount: ${e.target.value}`);
    this.setState({ hasDiscount: e.target.value });
  }

  // onChangeProductCategory(e) {
  //   console.log(`category: ${e.target.value}`);
  //   this.setState({ category: e.target.value });
  // }

  onChangeProductStockCount(e) {
    console.log(`stockCount: ${e.target.value}`);
    this.setState({ stockCount: e.target.value });
  }

  onChangeProductRatingCount(e) {
    console.log(`ratingCount: ${e.target.value}`);
    this.setState({ ratingCount: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newProduct = {
      description: this.state.description,
      name1: this.state.name1,
      name2: this.state.name2,
      // type: this.state.type,
      price1: this.state.price1,
      hasDiscount: this.state.hasDiscount,
      // category: this.state.category,
      stockCount: this.state.stockCount,
    };

    Axios.post("http://localhost:4000/product/new", newProduct).then((res) =>
      console.log(res.data)
    );
    this.setState({ description: "" });
    this.setState({ name1: "" });
    this.setState({ name2: "" });
    // this.setState({ type: "" });
    this.setState({ price1: 0 });
    this.setState({ hasDiscount: 0 });
    // this.setState({ category: "" });
    this.setState({ stockCount: 0 });
  }

  render() {
    return (
      <Container>
        <Styles>
          <Form>
            {/* <Row className="mb-3">
              <Form.Group as={Col} controlId="formProductCode">
                <Form.Label>CÓDIGO</Form.Label>
                <Form.Control type="number" disabled placeholder="0000" />
              </Form.Group>
            </Row> */}

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formProductCategory">
                <Form.Label>CATEGORIA</Form.Label>
                <Form.Select aria-label="Selecione">
                  <option>Selecione...</option>
                  <option value="1">Categ 1</option>
                  <option value="2">Categ 2</option>
                  <option value="3">Categ 3</option>
                </Form.Select>

                <Form.Label>NOME</Form.Label>
                <Form.Control
                  placeholder="Nome do Produto"
                  onValueChange={(name1, newName) =>
                    console.log(name1, newName)
                  }
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formProductDescription">
                <Form.Label>DESCRIÇÃO</Form.Label>
                <Form.Control
                  placeholder="Descrição do produto"
                  onValueChange={(description, newDescription) =>
                    console.log(description, newDescription)
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>TIPO</Form.Label>
                <Form.Check
                  type="switch"
                  id="promo-switch"
                  label="Ativar Promoção"
                />
                <Form.Check
                  type="switch"
                  id="trending-switch"
                  label="Ativar Destaque"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formProductPrice">
                <Form.Label>PREÇO</Form.Label>
                <CurrencyInput
                  intlConfig={{ locale: "pt-BR", currency: "BRL" }}
                  decimalSeparator=","
                  id="product-price"
                  name="product-price"
                  placeholder="R$"
                  decimalsLimit={2}
                  onValueChange={(price, newPrice) =>
                    console.log(price, newPrice)
                  }
                />

                <Form.Label>DESCONTO</Form.Label>
                <CurrencyInput
                  intlConfig={{ locale: "pt-BR", currency: "BRL" }}
                  decimalSeparator=","
                  id="product-discount"
                  name="product-discount"
                  placeholder="R$"
                  decimalsLimit={2}
                  onValueChange={(discount, newDiscount) =>
                    console.log(discount, newDiscount)
                  }
                />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit" onClick={this.onSubmit}>
              Submit
            </Button>
          </Form>
        </Styles>
      </Container>
    );
  }
}

const Checkbox = ({ label, value, onChange }) => {
  return (
    <div>
      <input type="checkbox" checked={value} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
};
