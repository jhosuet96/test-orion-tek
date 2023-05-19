import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Importa los componentes de Company
import CompanyList from './components/CompanyList';
import CompanyDetails from './components/CompanyDetails';
import CompanyForm from './components/CompanyForm';
import CompanyDelete from './components/CompanyDelete';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import CustomerForm from './components/CustomerForm';
import CustomerDelete from './components/CustomerDelete';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CompanyList} />
        <Route exact path="/company/create" component={CompanyForm} />
        <Route exact path="/company/:id" component={CompanyDetails} />
        <Route exact path="/company/:id/edit" component={CompanyForm} />
        <Route exact path="/company/:id/delete" component={CompanyDelete} />
        <Route exact path="/CustomerList" component={CustomerList} />
        <Route exact path="/customer/create" component={CustomerForm} />
        <Route exact path="/customer/:id" component={CustomerDetails} />
        <Route exact path="/customer/:id/edit" component={CustomerForm} />
        <Route exact path="/customer/:id/delete" component={CustomerDelete} />
      </Switch>
    </Router>
  );
}

export default App;
