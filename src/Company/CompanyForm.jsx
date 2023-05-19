import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../Api';

function CompanyForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({ nameCompany: '' });

  useEffect(() => {
    if (id) {
        API.get(`Company/GetById?id=${id}`)
        .then(response => {
          setFormData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
        API.patch(`Company/UpdateCompany`, formData)
        .then(response => {
          // Realiza alguna acción después de actualizar la empresa, como mostrar un mensaje de éxito o redirigir a otra página
          navigate(`/company/${id}`);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
        API.post(`Company/AddCompany`, formData)
        .then(response => {
          // Realiza alguna acción después de agregar la empresa, como mostrar un mensaje de éxito o redirigir a otra página
          navigate('/');
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h1>{id ? 'Editar Empresa' : 'Agregar Empresa'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre Compañia:
          <input type="text" name="nameCompany" value={formData.nameCompany} onChange={handleChange} />
        </label> 
        <button type="submit">{id ? 'Guardar cambios' : 'Agregar'}</button>
      </form>
    </div>
  );
}

export default CompanyForm;
