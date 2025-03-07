import React from 'react';

export const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
      <div className="text-center p-4 bg-white shadow rounded">
        <h1 className="mb-3">Bienvenido a Home</h1>
        <p className="text-muted">Explora y disfruta.</p>
        <button className="btn btn-primary mt-2">Empezar</button>
      </div>
    </div>
  );
};