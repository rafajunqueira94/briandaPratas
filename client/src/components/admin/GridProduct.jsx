import * as React from "react";

import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Filter,
} from "@syncfusion/ej2-react-grids";
import gridStyles from "../../gridStyles.css";

import { useState, useEffect } from "react";
import Axios from "axios";

export default function CustomDataGrid(item) {
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/product/")
      .then((response) => {
        setListOfProducts(response.data);
        console.log(response.data);
        console.log(response.data.length);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div
      style={{ display: "block", height: 400, width: "100%", fontSize: "10pt" }}
    >
      <GridComponent
        dataSource={listOfProducts}
        allowPaging={true}
        pageSettings={{ pageSize: 5 }}
        allowFiltering={true}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="_id"
            headerText="ID"
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="category"
            headerText="Categoria"
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="name1"
            headerText="NOME"
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="price1"
            headerText="PREÇO"
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="stockCount"
            headerText="ESTOQUE"
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="hasDiscount"
            headerText="PROMOÇÃO"
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="ratingCount"
            headerText="AVALIAÇÕES"
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="rating"
            headerText="NOTA"
            textAlign="center"
            width="100"
          />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
}
