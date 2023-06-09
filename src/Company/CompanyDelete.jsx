// CompanyDelete.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../Api';

function CompanyDelete() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    API.get(`Company/GetById?id=${id}`)
      .then(response => {
        setCompany(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleDelete = () => {
    API.delete(`Company/DeleteCompany/${id}`)
          .then(response => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate('/company/companyList');
        }, 1000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!company) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      <h1>Eliminar Empresa</h1>
      <div className="alert alert-danger" role="alert">
        <strong>¡Advertencia!</strong> Estás a punto de eliminar la empresa: {company.name}
      </div>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          ¡Empresa eliminada exitosamente!
        </div>
      )}
      <p>¿Estás seguro de que deseas eliminar esta empresa?</p>
      <button onClick={handleDelete} className="btn btn-danger">Eliminar Empresa</button>
    </div>
  );
}

export default CompanyDelete;
