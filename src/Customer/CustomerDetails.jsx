import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../Api';


function CustomerDetails() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    API.get(`Customer/GetById?id=${id}`)
      .then(response => {
        setCustomer(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!customer) {
    return <div className="container">Cargando...</div>;
  }

  return (
    <div className="container">
      <h1>{customer.name}</h1>  
      <p>Cliente: {customer.name} {customer.lastName}</p>
    </div>
  );
}

export default CustomerDetails;
