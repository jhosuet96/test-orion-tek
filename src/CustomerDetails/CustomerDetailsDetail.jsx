import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../Api';

function CustomerDetailsDetail() {
  const { id } = useParams();
  const [customerDetails, setCustomerDetails] = useState([]);
  const [customers, setCustomer] = useState(String);

  useEffect(() => {
    API.get(`CustomerDetails/GetByIdList?id=${id}`)
      .then(response => {
        setCustomerDetails(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

      const fetchCustomer= async () =>{
        API.get(`Customer/GetById?id=${id}`)
            .then(response => {
              setCustomer(response.data.name +' '+response.data.lastName);
            })
            .catch(error => {
              console.log(error);
            });

      }

      fetchCustomer();
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
            <th>Nombre</th>
            <th>Direccion</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
        {customerDetails.map(customer => (
            <tr key={customer.idCustomerDetail}>
              <td>{customers}</td>
              <td style={{ width: '500px' }}>{customer.address}</td>
              <td style={{ width: '300px' }}>{customer.email}</td>              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}

export default CustomerDetailsDetail;
