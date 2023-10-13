import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import InsurancePlan from './InsurancePlan/InsurancePlan';

const Insurance = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/insuranceplan" element={<InsurancePlan />} />
      </Routes>
    </Router>
  )
}

export default Insurance


