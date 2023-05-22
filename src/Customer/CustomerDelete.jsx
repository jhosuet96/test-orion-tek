// CustomerDelete.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../Api';

function CustomerDelete() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    API.get(`Customer/GetById?id=${id}`)
      .then(response => {
        setCustomer(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleDelete = () => {
    API.delete(`Customer/DeleteCustomer/${id}`)
      .then(response => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate('/customer');
        }, 1000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!customer) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      <h1>Eliminar Cliente</h1>
      <div className="alert alert-danger" role="alert">
        <strong>¡Advertencia!</strong> Estás a punto de eliminar al cliente: {customer.name}
      </div>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          ¡Cliente eliminado exitosamente!
        </div>
      )}
      <p>¿Estás seguro de que deseas eliminar este cliente?</p>
      <button onClick={handleDelete} className="btn btn-danger">Eliminar Cliente</button>
    </div>
  );
}

export default CustomerDelete;
