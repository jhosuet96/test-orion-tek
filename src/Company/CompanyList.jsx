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
    <div className="container">
      <h1>Lista de Empresas</h1>
      <Link to="/company/create" className="btn btn-primary">Agregar Empresa</Link>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <tr key={company.idCompany}>
              <td>{company.idCompany}</td>
              <td>{company.nameCompany}</td>
              <td style={{ width: '300px' }}>
                <Link to={`/company/${company.idCompany}`} style={{  marginRight: '1rem' }} className="btn btn-info mr-2">Ver</Link>
                <Link to={`/company/${company.idCompany}/edit`} style={{  marginRight: '1rem' }} className="btn btn-warning mr-2">Editar</Link>
                <Link to={`/company/${company.idCompany}/delete`} style={{  marginRight: '1rem' }} className="btn btn-danger">Eliminar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyList;
