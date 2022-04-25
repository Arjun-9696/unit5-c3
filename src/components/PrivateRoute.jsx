import { Routes, Route } from 'react-router';
import { Home } from './Home';
import { EmployeeDetails } from './EmployeeDetails';
import { EmployeeList } from './EmployeeList';
import { Admin } from './Admin';
import { Login } from './Login';

export const PrivateRoute = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/employees/:id" element={<EmployeeDetails />} />
        <Route exact path="/employees" element={<EmployeeList />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};
