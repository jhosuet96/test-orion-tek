import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../Api';

function CustomerDetailsDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    API.delete(`CustomerDetails/DeleteCustomerDetails/${id}`)
      .then(response => {
        navigate('/customerDetail');
      })
      .catch(error => {
        console.log(error);
      });
  }, [id, navigate]);

  return (
    <div className="container">
      <h1>Eliminando Detalles del Cliente...</h1>
    </div>
  );
}

export default CustomerDetailsDelete;
