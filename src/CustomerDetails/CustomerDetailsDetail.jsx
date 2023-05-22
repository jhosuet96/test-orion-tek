import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../Api';

function CustomerDetailsDetail() {
  const { id } = useParams();
  const [customerDetails, setCustomerDetails] = useState(null);

  useEffect(() => {
    API.get(`CustomerDetails/GetById?id=${id}`)
      .then(response => {
        setCustomerDetails(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!customerDetails) {
    return (
      <div className="container">
        <h1>Cargando Detalles del Cliente...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Detalles del Cliente</h1>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{customerDetails.idCustomer}</td>
            <td>{customerDetails.name} {customerDetails.lastName}</td>
            <td>{customerDetails.address}</td>
            <td>{customerDetails.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CustomerDetailsDetail;
