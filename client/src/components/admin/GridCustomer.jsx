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
  const [listOfCustomers, setListOfCustomers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/customer/")
      .then((response) => {
        setListOfCustomers(response.data);
        console.log(response.data);
        console.log(response.data.length);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ height: 400, width: "100%", fontSize: "10pt" }}>
      <GridComponent
        dataSource={listOfCustomers}
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
            field="isActive"
            headerText="ATIVO"
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="name"
            headerText="NOME"
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="gender"
            headerText="GÊNERO"
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="birthDate"
            headerText="DATA NASC."
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="email"
            headerText="EMAIL"
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="phone"
            headerText="TEL."
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="address"
            headerText="ENDEREÇO"
            textAlign="center"
            width="100"
          />
          <ColumnDirective
            field="registered"
            headerText="DT. CADASTRO"
            textAlign="center"
            width="100"
          />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
}
