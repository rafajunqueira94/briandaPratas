import * as React from "react";
import { useTable } from "react-table";
import { useState, useEffect } from "react";
import Axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function CustomDataGrid(item) {
  const [listOfCustomers, setListOfCustomers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/customer/")
      .then((response) => {
        setListOfCustomers(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteCustomer = (id) => {
    console.log(id);
    Axios.delete(`http://localhost:4000/customer/delete/` + id);
    Axios.get(`http://localhost:4000/customer/`)
      .then((response) => {
        setListOfCustomers(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    Axios.get("http://localhost:4000/customer/")
      .then((response) => {
        setListOfCustomers(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        display: "block",
        height: "content",
        width: "100%",
        fontSize: "10pt",
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>GERENCIAR</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>ATIVO?</TableCell>
              <TableCell>NOME</TableCell>
              <TableCell>E-MAIL</TableCell>
              <TableCell>TELEFONE</TableCell>
              <TableCell>ENDEREÇO</TableCell>
            </TableRow>
          </TableHead>
          {listOfCustomers.map((customer) => (
            <TableBody>
              <TableCell>
                {
                  <button
                    className="btn-danger"
                    onClick={() => {
                      deleteCustomer(customer._id);
                    }}
                  >
                    EXCLUIR
                  </button>
                }
              </TableCell>{" "}
              <TableCell>{customer._id}</TableCell>
              <TableCell>{customer.isActive ? "Sim" : "Não"}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.address}</TableCell>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
}
