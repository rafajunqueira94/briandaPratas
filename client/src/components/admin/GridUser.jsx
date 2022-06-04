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
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/user/")
      .then((response) => {
        setListOfUsers(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const deleteUser = (id) => {
    console.log(id);
    Axios.delete(`http://localhost:4000/user/delete/` + id);
    Axios.get(`http://localhost:4000/user/`)
      .then((response) => {
        setListOfUsers(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    Axios.get("http://localhost:4000/user/")
      .then((response) => {
        setListOfUsers(response.data);
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
              <TableCell>NOME</TableCell>
              <TableCell>E-MAIL</TableCell>
              <TableCell>TELEFONE</TableCell>
              <TableCell>LOGIN</TableCell>
              <TableCell>SENHA</TableCell>
            </TableRow>
          </TableHead>
          {listOfUsers.map((user) => (
            <TableBody>
              <TableCell>
                {
                  <button
                    className="btn-danger"
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                  >
                    EXCLUIR
                  </button>
                }
              </TableCell>
                <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.login}</TableCell>
              <TableCell>{user.password}</TableCell>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
}
