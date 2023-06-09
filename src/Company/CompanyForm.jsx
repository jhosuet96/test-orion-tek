import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../Api';

function CompanyForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({ nameCompany: '' });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

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

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      API.patch(`Company/UpdateCompany`, formData)
        .then(() => {
          setShowSuccessAlert(true);
          setTimeout(() => {
            setShowSuccessAlert(false);
            navigate(`/company/companyList`);
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          setShowErrorAlert(true);
        });
    } else {
      API.post(`Company/AddCompany`, formData)
        .then(() => {
          setShowSuccessAlert(true);
          setTimeout(() => {
            setShowSuccessAlert(false);
            navigate(`/company/companyList`);
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          setShowErrorAlert(true);
        });
    }
  };

  return (
    <div className="container">
      <h1>{id ? 'Editar Empresa' : 'Agregar Empresa'}</h1>
      {showSuccessAlert && (
        <div className="alert alert-success" role="alert">
          ¡Guardado exitosamente!
        </div>
      )}
      {showErrorAlert && (
        <div className="alert alert-danger" role="alert">
          Se produjo un error. Por favor, inténtelo de nuevo.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Nombre Compañia:
            <input type="text" className="form-control" name="nameCompany" value={formData.nameCompany} onChange={handleChange} />
          </label>
        </div>
        <button style={{ marginTop: '0.5rem' }} type="submit" className="btn btn-primary">
          {id ? 'Guardar cambios' : 'Agregar'}
        </button>
      </form>
    </div>
  );
}

export default CompanyForm;
