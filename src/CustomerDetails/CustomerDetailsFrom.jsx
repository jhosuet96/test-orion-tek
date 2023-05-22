import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../Api';

function CustomerDetailsForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    idCustomerDetail: 0,
    idCustomer: 0,
    address: '',
    email: '',
    status: true
  });

  useEffect(() => {
    if (id) {
      API.get(`CustomerDetails/GetById?id=${id}`)
        .then(response => {
          setCustomerDetails(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [id]);

  const handleChange = e => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      API.patch('CustomerDetails/UpdateCustomerDetails', customerDetails)
        .then(() => {
          setShowSuccessAlert(true);
          setTimeout(() => {
            setShowSuccessAlert(false);
            navigate('/customerDetails');
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          setShowErrorAlert(true);
        });
    } else {
      API.post('CustomerDetails/AddCustomerDetails', customerDetails)
        .then(() => {
          setShowSuccessAlert(true);
          setTimeout(() => {
            setShowSuccessAlert(false);
            navigate('/customerDetails');
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
      <h1>Formulario de Detalles de Cliente</h1>
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
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={customerDetails.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={customerDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Estado:</label>
          <select
            className="form-control"
            id="status"
            name="status"
            value={customerDetails.status}
            onChange={handleChange}
            required
          >
            <option value={true}>Activo</option>
            <option value={false}>Inactivo</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', marginRight: '0.5rem' }}>
          Guardar
        </button>
        <button type="button" className="btn btn-secondary ml-2" style={{ marginTop: '0.5rem' }} onClick={() => navigate('/customerDetails')}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default CustomerDetailsForm;
