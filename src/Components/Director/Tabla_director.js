import React from "react";
import { Table } from "react-bootstrap";

export const Tabla_director = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Nombre del usuario</th>
            <th>Tipo de rol </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>user_1</td>
            <td>Asesor</td>
          </tr>
          <tr>
            <td>2</td>
            <td>user_2</td>
            <td>Asesor</td>
          </tr>
          <tr>
            <td>3</td>
            <td>user_3</td>
            <td>Cajero</td>
          </tr>
          <tr>
            <td>4</td>
            <td>user_4</td>
            <td>Gerente</td>
          </tr>
          <tr>
            <td>5</td>
            <td>user_5</td>
            <td>Cajero</td>
          </tr>
          <tr>
            <td>6</td>
            <td>user_6</td>
            <td>Asesor</td>
          </tr>
          <tr>
            <td>7</td>
            <td>user_7</td>
            <td>Cajero</td>
          </tr>
          <tr>
            <td>8</td>
            <td>user_8</td>
            <td>Asesor</td>
          </tr>
          <tr>
            <td>9</td>
            <td>user_9</td>
            <td>Cajero</td>
          </tr>
          <tr>
            <td>10</td>
            <td>user_10</td>
            <td>Gerente</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
