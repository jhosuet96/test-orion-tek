import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../Api';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    API.get('Company/GetAll')
      .then(response => {
        setCompanies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Empresas</h1>
      <Link to="/company/create">Agregar Empresa</Link>
      <ul>
        {companies.map(company => (
          <li key={company.idCompany}>
            <Link to={`/company/${company.idCompany}`}>{company.nameCompany}</Link>
            <Link to={`/company/${company.idCompany}/edit`}>Editar</Link>
            <Link to={`/company/${company.idCompany}/delete`}>Eliminar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyList;
