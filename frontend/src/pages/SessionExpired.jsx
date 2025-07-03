// src/pages/SessionExpired.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SessionExpired = () => {
  return (
    <div className="container mt-5 text-center">
      <h2 className="text-danger">Session Expired</h2>
      <p>Please login again to continue.</p>
      <Link className="btn btn-primary" to="/login">Go to Login</Link>
    </div>
  );
};

export default SessionExpired;
