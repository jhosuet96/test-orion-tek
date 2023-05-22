import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import API from '../Api';

function CustomerForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', lastName: '', idCompany: '' });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    if (id) {
      API.get(`Customer/GetById?id=${id}`)
        .then(response => {
          setFormData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
    const fetchCompanies = async () => {
      try {
        const response = await fetch('https://localhost:7133/Company/GetAll');
        const data = await response.json();
        // Mapear la respuesta para obtener las opciones del dropdown
        const options = data.map(company => ({
          value: company.idCompany,
          label: company.nameCompany,
        }));
        setCompanies(options);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCompanies();
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      formData.idCompany = selectedCompany.value;
      API.patch(`Customer/UpdateCustomer`, formData)
        .then(() => {
          setShowSuccessAlert(true);
          setTimeout(() => {
            setShowSuccessAlert(false);
            navigate(`/customer/customerList`);
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          setShowErrorAlert(true);
        });
    } else {
      formData.idCompany = selectedCompany.value;
      API.post(`Customer/AddCustomer`, formData)
        .then(() => {
          setShowSuccessAlert(true);
          setTimeout(() => {
            setShowSuccessAlert(false);
            navigate('/customer/customerList');
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
      <h1>{id ? 'Editar Cliente' : 'Agregar Cliente'}</h1>
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
          <label>Nombre:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="company">Compañía</label>
          <Select
            id="company"
            name="idCompany"
            options={companies}
            value={selectedCompany}
            onChange={option => setSelectedCompany(option)}
          />
        </div>
        <button style={{ marginTop: '0.5rem' }} type="submit" className="btn btn-primary">
          {id ? 'Guardar cambios' : 'Agregar'}
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;
