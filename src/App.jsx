import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/Header";
import Dashboard from "./pages/dashboard";
import Requests from "./pages/requests";
import KYC from "./pages/kyc";
import Reports from "./pages/reports";
import Tasks from "./pages/tasks";
import AuditTrail from "./pages/audit_trail";
import Customers from "./pages/customers";
import Users from "./pages/users";
import Settings from "./pages/settings";
import Administration from "./pages/administration";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/dashboard"
          element={
            <Layout header={<Header title="Dashboard" />}>
              <Dashboard />
            </Layout>
          }
        />
        <Route 
          path="/requests" 
          element={
            <Layout header={<Header title="Requests" />}>
              <Requests />
            </Layout>
          } 
        />
         <Route 
          path="/kyc" 
          element={
            <Layout header={<Header title="KYC" />}>
              <KYC />
            </Layout>
          } 
        />
         <Route 
          path="/reports" 
          element={
            <Layout header={<Header title="Reports" />}>
              <Reports />
            </Layout>
          } 
        /> 
         <Route 
          path="/tasks" 
          element={
            <Layout header={<Header title="Tasks" />}>
              <Tasks/>
            </Layout>
          } 
        /> 
         <Route 
          path="/audit" 
          element={
            <Layout header={<Header title="Audit Trail" />}>
              <AuditTrail/>
            </Layout>
          } 
        /> 
         <Route 
          path="/customers" 
          element={
            <Layout header={<Header title="Customers" />}>
              <Customers/>
            </Layout>
          } 
        /> 
         <Route 
          path="/users" 
          element={
            <Layout header={<Header title="Users" />}>
              <Users/>
            </Layout>
          } 
        /> 
         <Route 
          path="/settings" 
          element={
            <Layout header={<Header title="Settings" />}>
              <Settings/>
            </Layout>
          } 
        /> 
         <Route 
          path="/admin" 
          element={
            <Layout header={<Header title="Administration" />}>
              <Administration/>
            </Layout>
          } 
        /> 
        {/* Add more routes for other sidebar menu items */}
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
