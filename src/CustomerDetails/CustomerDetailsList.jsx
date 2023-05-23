import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../Api';

function CustomerDetailsList() {
  const [customerDetails, setCustomerDetails] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    API.get('CustomerDetails/GetAll')
      .then(response => {
        setCustomerDetails(response.data);
      })
      .catch(error => {
        console.log(error);
      });

      API.get('Customer/GetAll')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    API.delete(`CustomerDetails/DeleteCustomerDetails/${id}`)
      .then(response => {
        setCustomerDetails(customerDetails.filter(customer => customer.idCustomerDetail !== id));
        window.location.reload(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Lista de Detalles del Cliente</h1>
      <Link to="/customerDetails/create" className="btn btn-primary mb-3">Agregar Detalles a Cliente</Link>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>E-mail</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {customerDetails.map(customer => (
            <tr key={customer.idCustomerDetail}>
              <td>{getCustomerName(customer.idCustomer)}</td>
              <td>{customer.address}</td>
              <td>{customer.email}</td>
              <td>
                <Link to={`/customerDetails/${customer.idCustomerDetail}/edit`} style={{ marginRight: '1rem' }} className="btn btn-warning mr-2">Editar</Link>
                <button className="btn btn-danger" onClick={() => handleDelete(customer.idCustomerDetail)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function getCustomerName(idCustomer) {
    const customer = customers.find(c => c.idCustomer === idCustomer);
    return customer ? customer.name : 'N/A';
  }
}

export default CustomerDetailsList;
