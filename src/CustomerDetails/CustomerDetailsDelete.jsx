import React, { useEffect,useState  } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../Api';

function CustomerDetailsDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  useEffect(() => {
    API.delete(`CustomerDetails/DeleteCustomerDetails/${id}`)
      .then(response => {
        setShowDeleteAlert(true);
        setTimeout(() => {
          setShowDeleteAlert(false);
          navigate('/customerDetail');
        }, 1000);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id, navigate]);

  return (
    <div className="container">
      <h1>Eliminando Detalles del Cliente...</h1>
      {showDeleteAlert && (
        <div className="alert alert-success" role="alert">
          ¡Detalles del cliente eliminados exitosamente!
        </div>
      )}
    </div>
  );
}

export default CustomerDetailsDelete;