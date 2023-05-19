import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa los componentes de Company
import CompanyList from './Company/CompanyList';
import CompanyDetails from './Company/CompanyDetails';
import CompanyForm from './Company/CompanyForm';
import CompanyDelete from './Company/CompanyDelete';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyList />} />
        <Route path="/company/create" element={<CompanyForm />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
        <Route path="/company/:id/edit" element={<CompanyForm />} />
        <Route path="/company/:id/delete" element={<CompanyDelete />} />
      </Routes>
    </Router>
  );
}

export default App;
