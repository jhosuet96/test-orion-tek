import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../Api';

function CompanyDetails() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    API.get(`Company/GetById?id=${id}`)
      .then(response => {
        setCompany(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!company) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{company.nameCompany}</h1>
      <p>Nombre Compañia: {company.nameCompany}</p>
    </div>
  );
}

export default CompanyDetails;
