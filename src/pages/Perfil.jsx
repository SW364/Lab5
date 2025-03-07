import React from 'react';

export const Perfil = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 text-center shadow-lg" style={{ width: '22rem' }}>
        <h2 className="mb-1">Usuario</h2>
        <p className="text-muted">@usuario123</p>
        <button className="btn btn-primary mt-3">Editar perfil</button>
      </div>
    </div>
  );
};
