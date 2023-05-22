import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

// Importa los componentes de Company
import CompanyList from './Company/CompanyList';
import CompanyDetails from './Company/CompanyDetails';
import CompanyForm from './Company/CompanyForm';
import CompanyDelete from './Company/CompanyDelete';
import CustomerList from './Customer/CustomerList.jsx';
import CustomerDetails from './Customer/CustomerDetails.jsx';
import CustomerForm from './Customer/CustomerForm.jsx';
import CustomerDelete from './Customer/CustomerDelete.jsx';
import CustomerDetailsList from './CustomerDetails/CustomerDetailsList';
import CustomerDetailsForm from './CustomerDetails/CustomerDetailsFrom';
import CustomerDetailsDelete from './CustomerDetails/CustomerDetailsDelete';
import CustomerDetailsDetail from './CustomerDetails/CustomerDetailsDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" component={Home} />
        <Route path="/customer" element={<CustomerList />}  />
        <Route path="/company" element={<CompanyList />} />
        <Route path="/customerDetails" element={<CustomerDetailsList />} />
        <Route path="/company/create" element={<CompanyForm />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
        <Route path="/company/:id/edit" element={<CompanyForm />} />
        <Route path="/company/:id/delete" element={<CompanyDelete />} />
        <Route path="/customer/create" element={<CustomerForm />} />
        <Route path="/customer/:id" element={<CustomerDetails />} />
        <Route path="/customer/:id/edit" element={<CustomerForm />} />
        <Route path="/customer/:id/delete" element={<CustomerDelete />} />
        <Route path="/customerDetails/create" element={<CustomerDetailsForm/>} />
        <Route path="/customerDetails/:id/edit" element={<CustomerDetailsForm/>} />
        <Route path="/customerDetails/:id/delete" element={<CustomerDetailsDelete/>} />
        <Route path="/customerDetails/:id" element={<CustomerDetailsDetail/>} />

      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Home</h1>;
}

export default App;
