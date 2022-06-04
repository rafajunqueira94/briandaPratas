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
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/product/")
      .then((response) => {
        setListOfProducts(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{ display: "block", height: 400, width: "100%", fontSize: "10pt" }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NOME</TableCell>
              <TableCell>CATEGORIA</TableCell>
              <TableCell>TIPO</TableCell>
              <TableCell>AVALIAÇÃO</TableCell>
              <TableCell>PREÇO</TableCell>
              <TableCell>DESCONTO</TableCell>
              <TableCell>ESTOQUE</TableCell>
            </TableRow>
          </TableHead>
          {listOfProducts.map((product) => (
            <TableBody>
              <TableCell>{product._id}</TableCell>
              <TableCell>{product.name1}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.type}</TableCell>
              <TableCell>
                {product.rating + " de " + product.ratingCount + " votos"}
              </TableCell>
              <TableCell>{product.price1}</TableCell>
              <TableCell>{product.hasDiscount}</TableCell>
              <TableCell>{product.stockCount}</TableCell>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
}
