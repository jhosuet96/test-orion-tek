import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../Api';

function CompanyDelete() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    API.delete(`Company/DeleteCompany/${id}`)
      .then(response => {
        // Realiza alguna acción después de eliminar la empresa, como mostrar un mensaje de éxito o redirigir a otra página
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Eliminar Empresa</h1>
      <p>¿Estás seguro de que deseas eliminar esta empresa?</p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default CompanyDelete;
