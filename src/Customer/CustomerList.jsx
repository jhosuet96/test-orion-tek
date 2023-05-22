import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../Api';

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Obtener la lista de clientes
    API.get('Customer/GetAll')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    // Obtener la lista de compañías
    API.get('Company/GetAll')
      .then(response => {
        setCompanies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Lista de Clientes</h1>
      <Link to="/customer/create" className="btn btn-primary mb-3">Agregar Cliente</Link>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Compañía</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.idCustomer}>
              <td>{customer.idCustomer}</td>
              <td>{customer.name} {customer.lastName}</td>
              <td>{getCompanyName(customer.idCompany)}</td>
              <td style={{ width: '300px' }}>
                <Link to={`/customer/${customer.idCustomer}`} style={{ marginRight: '1rem' }} className="btn btn-info mr-2">Ver</Link>
                <Link to={`/customer/${customer.idCustomer}/edit`} style={{ marginRight: '1rem' }} className="btn btn-warning mr-2">Editar</Link>
                <Link to={`/customer/delete/${customer.idCustomer}`} style={{ marginRight: '1rem' }} className="btn btn-danger">Eliminar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function getCompanyName(idCompany) {
    const company = companies.find(c => c.idCompany === idCompany);
    return company ? company.nameCompany : 'N/A';
  }
}

export default CustomerList;
